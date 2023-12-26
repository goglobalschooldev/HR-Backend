import express from 'express';
import Shift from '../../models/Shift';
import { iLeaveInput, iShift } from '../../interface/iShift';
import AuchCheck from '../../auth/AuchCheck';
import MessageRespone from '../../fn/MessageRespone';
import EmployeePublicHoliday from '../../models/EmployeePublicHoliday';
import { currentDate, currentTime } from '../../fn/currentDate';
import LeaveRecordAtt from '../../fn/LeaveRecordAtt';
import { paginationLabel } from '../../fn/paginationLabel';
import Employee from '../../models/Employee';
import mongoose from 'mongoose';
import Notification from '../../models/Notification';
import { expoNotificationSender } from '../../fn/expoNotificationSender';

const ShiftResolver = {
    Query: {
        getTimeOffsForMobile: async (_root: undefined, { }, { req }: { req: express.Request }) => {
            try {
                const auchCheck = await AuchCheck(req)
                if (!auchCheck.status) {
                    return new Error(auchCheck.message);
                }
                const currentDate = new Date();
                const currentYear = currentDate.getFullYear();
                const getPH = await EmployeePublicHoliday.find({ employeeId: auchCheck?.user?.user_id, year: currentYear.toString() }).populate("title");

                const data = getPH.map((ph: any) => {
                    return {
                        _id: ph?._id,
                        timeOff: ph?.title?.publicHoliday
                    }
                })
                return data;
            } catch (error) {
                return error
            }
        },
        getShiftsPagination: async (_root: undefined,
            { page, limit, keyword, shiftStatus, from, to, branchId }:
                { page: number, limit: number, keyword: string, shiftStatus: string, from: string, to: string, branchId: string }
        ) => {
            try {
                const options = {
                    page: page || 1,
                    limit: limit || 10,
                    customLabels: paginationLabel,
                    pagination: true,
                    populate: "timeOff requestBy cancelBy approveBy",
                    sort: { createdAt: -1 }
                };

                const fromQuery = from.length === 0 ? {} : {
                    from: { $gte: new Date(from) }
                }
                const toQuery = to.length === 0 ? {} : {
                    to: { $lte: new Date(to) }
                }

                const branchIdQuery = branchId === "All" ? {} : { branch: new mongoose.Types.ObjectId(branchId) }
                const getEmployees = await Employee.find({
                    $and: [
                        branchIdQuery,
                        { latinName: { $regex: keyword, $options: "i" } }
                    ]
                })
                const employeeIds = getEmployees.map(emp => emp?._id?.toString());
                // requestBy
                const query = {
                    $and: [
                        { approveStatus: shiftStatus },
                        fromQuery,
                        toQuery,
                        { requestBy: { $in: employeeIds } },
                    ]
                };

                const getShift: any = await Shift.paginate(query, options);
                const data = getShift?.data?.map((data: iShift) => {
                    return {
                        _id: data?._id,
                        from: data?.from,
                        to: data?.to,
                        reason: data?.reason,
                        timeOff: data?.shiftOff,
                        requestBy: data?.requestBy?.latinName,
                        approveBy: data?.approveBy?.latinName,
                        cancelBy: data?.cancelBy?.latinName,

                        requestByProfile: data?.requestBy?.profileImage,
                        approveByProfile: data?.approveBy?.profileImage,
                        cancelByProfile: data?.cancelBy?.profileImage,

                        hrComment: data?.hrComment,
                        requestAt: `${currentDate(data?.createdAt)},${data?.requestAt}`
                    }
                })
                return {
                    data,
                    paginator: getShift.paginator
                }
            } catch (error) {
                return error
            }
        }
    },
    Mutation: {
        requestLeave: async (_root: undefined, { input }: { input: iLeaveInput }, { req }: { req: express.Request }) => {
            try {

                const auchCheck = await AuchCheck(req)
                if (!auchCheck.status) {
                    return new Error(auchCheck.message);
                }

                const addLeave = await new Shift({
                    from: input?.from,
                    to: input?.to,
                    shiftOff: input?.shiftOff,
                    reason: input?.reason,
                    timeOff: input?.timeOff,
                    requestAt: currentTime(),
                    requestBy: auchCheck?.user?.user_id,
                }).save();
                if (addLeave) {
                    return MessageRespone(true)
                }
            } catch (error) {
                return error
            }
        },
        cancelLeave: async (_root: undefined, { leaveID, hrComment }: { leaveID: string, hrComment: string }, { req }: { req: express.Request }) => {
            try {
                const auchCheck = await AuchCheck(req)
                if (!auchCheck.status) {
                    return new Error(auchCheck.message);
                }
                const updateLeave = await Shift.findByIdAndUpdate(leaveID, {
                    approveStatus: "cancel",
                    cancelBy: auchCheck?.user?.user_id,
                    hrComment
                });
                if (updateLeave) {
                    expoNotificationSender([updateLeave?.requestBy?.toString()], "Leave Cancel", hrComment, updateLeave._id.toString(), "leave")
                    // add Notification===============
                    await new Notification({
                        type: "leave",
                        forUser: [updateLeave?.requestBy?.toString()],
                        navigetId: updateLeave?._id,
                        title: "Leave Cancel",
                        body: hrComment,
                        date: new Date(currentDate()),
                        time: currentTime(),
                    }).save()
                    return MessageRespone(true)
                } else {
                    return MessageRespone(false)
                }
            } catch (error) {
                return error
            }
        },
        approveLeave: async (_root: undefined, { leaveID, hrComment }: { leaveID: string, hrComment: string }, { req }: { req: express.Request }) => {
            try {

                const auchCheck = await AuchCheck(req)
                if (!auchCheck.status) {
                    return new Error(auchCheck.message);
                }
                const updateLeave = await Shift.findByIdAndUpdate(leaveID, {
                    approveStatus: "approve",
                    approveBy: auchCheck?.user?.user_id,
                    hrComment
                });
                if (updateLeave) {
                    // alert Notification ===========================
                    expoNotificationSender([updateLeave?.requestBy?.toString()], "Leave Approved", hrComment, updateLeave._id.toString(), "leave")
                    // add Notification =======================
                    await new Notification({
                        type: "leave",
                        forUser: [updateLeave?.requestBy?.toString()],
                        navigetId: updateLeave?._id,
                        title: "Leave Approved",
                        body: hrComment,
                        date: new Date(currentDate()),
                        time: currentTime(),
                    }).save()

                    // ["AllDay", "Morning", "Afternoon"] },
                    if (updateLeave?.shiftOff === "AllDay") {
                        for (var date = updateLeave?.from; date <= updateLeave?.to; date.setDate(date.getDate() + 1)) {
                            LeaveRecordAtt(date, updateLeave?.requestBy?.toString(), updateLeave?.shiftOff, updateLeave?.reason)
                        }
                    }
                    if (updateLeave?.shiftOff === "Morning") {
                        LeaveRecordAtt(updateLeave?.from, updateLeave?.requestBy?.toString(), updateLeave?.shiftOff, updateLeave?.reason)
                    }
                    if (updateLeave?.shiftOff === "Afternoon") {
                        LeaveRecordAtt(updateLeave?.from, updateLeave?.requestBy?.toString(), updateLeave?.shiftOff, updateLeave?.reason)
                    }
                    return MessageRespone(true)
                } else {
                    return MessageRespone(false)
                }
            } catch (error) {
                return error
            }
        }
    }
};

export default ShiftResolver;