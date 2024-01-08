import express from 'express';
import AuchCheck from '../../auth/AuchCheck';
import { iAttendance } from '../../interface/iAttendance';
import Attendance from '../../models/Attendance';
import mongoose from 'mongoose';
import Employee from '../../models/Employee';
import { Contract } from '../../models/Contract';
import Shift from '../../models/Shift';
import { currentDate } from '../../fn/currentDate';
import AuthAdmin from '../../auth/AuthAdmin';
import EmployeePublicHoliday from '../../models/EmployeePublicHoliday';
import { iEmployeePublicHoliday } from '../../interface/iEmployee';
import moment from 'moment';
import { iShift } from '../../interface/iShift';
import Notification from '../../models/Notification';
import removeDuplicates from '../../fn/removeDuplicates';

const MobileResolver = {
    Query: {
        getAttendanceMobile: async (_root: undefined, { limit }: { limit: number }, { req }: { req: express.Request }) => {
            try {
                const auchCheck = await AuchCheck(req)
                if (!auchCheck.status) {
                    return new Error(auchCheck.message);
                }

                const getAtt = await Attendance.find({
                    employeeId: new mongoose.Types.ObjectId(auchCheck?.user?.user_id?.toString())
                }).sort({ attendanceDate: -1 }).limit(limit).populate([
                    {
                        path: 'employeeId',
                        populate: [{ path: 'branch' }]
                    },
                ]);

                const data = getAtt.map((data: iAttendance) => {
                    const attendances = {
                        morning: data?.morningShift?.attendance,
                        afternoon: data?.afternoonShift?.attendance
                    }
                    return {
                        _id: data?._id,
                        date: data?.attendanceDate,
                        lanitnName: data?.employeeId?.latinName,
                        morning: `${data?.morningShift?.checkIn} - ${data?.morningShift?.checkOut}`,
                        afternoon: `${data?.afternoonShift?.checkIn} - ${data?.afternoonShift?.checkOut}`,
                        attendances,
                        fine: data?.morningShift?.fine + data?.afternoonShift?.fine,
                        branch: data?.employeeId?.branch?.branchName
                    }
                });
                return data;
            } catch (error) {
                return error
            }
        },
        getUserInfoMobile: async (_root: undefined, { }, { req }: { req: express.Request }) => {
            try {

                const auchCheck = await AuchCheck(req)
                if (!auchCheck.status) {
                    return new Error(auchCheck.message);
                }
                const getUser = await Employee.findById(auchCheck?.user?.user_id?.toString());
                const getContract = await Contract.findOne({
                    employeeId: new mongoose.Types.ObjectId(auchCheck?.user?.user_id?.toString()),
                    status: false
                }).populate("position")
                return {
                    profileImage: getUser?.profileImage,
                    latinName: getUser?.latinName,
                    position: getContract?.position?.position
                }
            } catch (error) {
                return error
            }
        },
        getEmployeeOnHoliday: async (_root: undefined, { }, { req }: { req: express.Request }) => {
            try {
                const auchCheck = await AuchCheck(req)
                if (!auchCheck.status) {
                    return new Error(auchCheck.message);
                }

                const geShifts = await Shift.find({
                    from: { $gte: new Date(currentDate()) },
                    approveStatus: "approve"
                }).sort({ from: 1 }).populate("timeOff requestBy cancelBy approveBy");
                const data = geShifts.map((data: iShift) => {
                    let f = moment(data?.from).format('DD');
                    let t = moment(data?.to).format('DD');
                    let to = moment(data?.to).format('DD MMM YY');
                    let from = moment(data?.to).format('DD MMM YY');
                    return {
                        _id: data?._id,
                        timeOff: data?.shiftOff,
                        profileImage: data?.requestBy?.profileImage,
                        latinName: data?.requestBy?.latinName,
                        reason: data?.reason,
                        dateLeave: f === t ? from : f + "-" + to
                    }
                });
                return data
            } catch (error) {
                return error
            }
        },
        forgortUserPassword: async (_root: undefined, { email }: { email: string }) => {
            try {
                const forgortPass = await AuthAdmin.forgotPassword(email);
                return {
                    status: forgortPass.status,
                    title: forgortPass.message,
                    description: forgortPass.des
                }
            } catch (error) {
                return error
            }
        },
        getEmployeeLeaveInfo: async (_root: undefined, { employeeId }: { employeeId: string }) => {
            try {

                const getAl: iEmployeePublicHoliday = await EmployeePublicHoliday.findOne({ employeeId: employeeId, status: true })
                const currentDate = new Date();

                const currentYear = currentDate.getFullYear();

                // Permission=======================================================
                const MoningPermission = await Attendance.find({
                    $and: [
                        { employeeId: new mongoose.Types.ObjectId(employeeId) },
                        { "morningShift.attendance": "Permission" },
                        {
                            $expr: {
                                $eq: [{ $year: '$attendanceDate' }, currentYear],
                            }
                        },
                    ]
                })
                const AfternoonPermission = await Attendance.find({
                    $and: [
                        { employeeId: new mongoose.Types.ObjectId(employeeId) },
                        { "afternoonShift.attendance": "Permission" },
                        {
                            $expr: {
                                $eq: [{ $year: '$attendanceDate' }, currentYear],
                            }
                        },
                    ]
                });

                const getMoningPermissionId = MoningPermission.map(da => da._id.toString())
                const getAfternoonPermissionId = AfternoonPermission.map(da => da._id.toString())
                const totalPermissionId = [...getMoningPermissionId, ...getAfternoonPermissionId]
                const rePermissionIdDuplicates = removeDuplicates(totalPermissionId);
                const permission = rePermissionIdDuplicates.length / 2;



                // Late=======================================================
                const MoningLate = await Attendance.find({
                    $and: [
                        { employeeId: new mongoose.Types.ObjectId(employeeId) },
                        { "morningShift.attendance": "Late" },
                        {
                            $expr: {
                                $eq: [{ $year: '$attendanceDate' }, currentYear],
                            }
                        },
                    ]
                })

                const AfternoonLate = await Attendance.find({
                    $and: [
                        { employeeId: new mongoose.Types.ObjectId(employeeId) },
                        { "afternoonShift.attendance": "Late" },
                        {
                            $expr: {
                                $eq: [{ $year: '$attendanceDate' }, currentYear],
                            }
                        },
                    ]
                });


                return {
                    al: getAl?.totalDay - permission,
                    permission: permission,
                    late: MoningLate.length + AfternoonLate.length,
                    fine: MoningLate.length + AfternoonLate.length
                }

            } catch (error) {
                return error
            }
        },
        getLeaveListForMobile: async (_root: undefined, { limit }: { limit: number }, { req }: {
            req: express.Request
        }) => {
            try {
                const auchCheck = await AuchCheck(req)
                if (!auchCheck.status) {
                    return new Error(auchCheck.message);
                }
                const getShifts = await Shift.find({ requestBy: new mongoose.Types.ObjectId(auchCheck?.user?.user_id?.toString()) }).sort({ createdAt: -1 }).limit(limit)
                const data = getShifts.map((shift: iShift) => {
                    let from = moment(shift?.from).format('DD');
                    let to = moment(shift?.to).format('DD MMM YY');
                    return {
                        _id: shift?._id,
                        description: shift?.reason,
                        date: from + "-" + to,
                        shife: shift?.shiftOff,
                        status: shift?.approveStatus
                    }
                })
                return data
            } catch (error) {
                return error
            }
        },
        getNotifications: async (_root: undefined, { limit }: { limit: number }, { req }: {
            req: express.Request
        }) => {
            try {
                const auchCheck = await AuchCheck(req)
                if (!auchCheck.status) {
                    return new Error(auchCheck.message);
                }

                const data = await Notification.find({ forUser: { $elemMatch: { $in: auchCheck?.user?.user_id?.toString() } } }).limit(limit).sort({ createdAt: -1 })

                return data
            } catch (error) {
                return error
            }
        }
    }
}

export default MobileResolver;