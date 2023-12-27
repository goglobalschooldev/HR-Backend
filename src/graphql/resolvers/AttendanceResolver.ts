import AuchCheck from "../../auth/AuchCheck";
import AttendanceRescord from "../../fn/AttendanceRescord";
import { currentDate } from "../../fn/currentDate";
import Attendance from "../../models/Attendance";
import express from 'express';
import Employee from "../../models/Employee";
import { getDistance } from 'geolib';
import { paginationLabel } from "../../fn/paginationLabel";
import mongoose from "mongoose";
import { iAttendance, iAttendanceInput } from "../../interface/iAttendance";
import MessageRespone from "../../fn/MessageRespone";
import { WrokingTime } from "../../models/Branch";
import { iWrokingTime } from "../../interface/iBranch";
import { iEmployee } from "../../interface/iEmployee";

const attendanceResolver = {
    Query: {
        getAttendancePagination: async (_root: undefined,
            { page, limit, keyword, branchId, date }:
                { page: number, limit: number, keyword: string, branchId: string, date: string }) => {
            try {

                const options = {
                    page: page || 1,
                    limit: limit || 10,
                    customLabels: paginationLabel,
                    pagination: true,
                    sort: { createdAt: -1 },
                    populate: [
                        {
                            path: 'employeeId',
                            populate: [{ path: 'branch' }]
                        },
                    ]
                };

                const branchIdQuery = branchId === "All" ? {} : { branch: new mongoose.Types.ObjectId(branchId) }
                const getEmployees = await Employee.find({
                    $and: [
                        branchIdQuery,
                        { latinName: { $regex: keyword, $options: "i" } }
                    ]
                })
                const employeeIds = getEmployees.map(emp => emp?._id?.toString());

                const query = {
                    $and: [
                        { employeeId: { $in: employeeIds } },
                        { attendanceDate: new Date(date) }
                    ]
                };

                const getAttendances: any = await Attendance.paginate(query, options);
                const data = getAttendances?.data?.map((data: iAttendance) => {
                    const attendances = {
                        morning: data?.morningShift?.attendance,
                        afternoon: data?.afternoonShift?.attendance
                    }
                    return {
                        _id: data?._id,
                        date: data?.attendanceDate,
                        profileImage: data?.employeeId?.profileImage,
                        latinName: data?.employeeId?.latinName,
                        morning: `${data?.morningShift?.checkIn} - ${data?.morningShift?.checkOut}`,
                        afternoon: `${data?.afternoonShift?.checkIn} - ${data?.afternoonShift?.checkOut}`,
                        attendances,
                        fine: data?.morningShift?.fine + data?.afternoonShift?.fine,
                        branch: data?.employeeId?.branch?.branchName
                    }
                })
                return {
                    data,
                    paginator: getAttendances?.paginator
                };
            } catch (error) {
                return error
            }
        },
        getEmployeeAttendance: async (_root: undefined, { employeeId, from, to, limit }: { employeeId: string, from: string, to: string, limit: number }) => {
            try {
                const fromQuery = from.length === 0 ? {} : {
                    attendanceDate: { $gte: new Date(from) }
                }
                const toQuery = to.length === 0 ? {} : {
                    attendanceDate: { $lte: new Date(to) }
                }
                const getAtt = await Attendance.find({
                    $and: [
                        { employeeId: new mongoose.Types.ObjectId(employeeId) },
                        fromQuery,
                        toQuery
                    ]
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
        getDailyAttendanceReport: async (_root: undefined, { date, shift }: { date: string, shift: string }) => {
            try {
                
                const WorkingTimeShift = shift === "morning" ? { shiftName: "Morning" } : { shiftName: "Afternoon" }
                const getCheckWorkingTime = await WrokingTime.find(WorkingTimeShift);
                const WorkingTimeEmployeeId = getCheckWorkingTime.map((workingTime: iWrokingTime) => workingTime?.employeeId);

                const getEmployees = await Employee.aggregate([
                    { $match: { _id: { $in: WorkingTimeEmployeeId } } },
                    { $match: { workingStatus: "working" } },
                ]);

                const datas = await Promise.all(
                    getEmployees.map(async (employee: iEmployee) => {
                        const getAttendance = await Attendance.findOne({
                            $and: [
                                {
                                    attendanceDate: new Date(date)
                                },
                                {
                                    employeeId: employee?._id
                                }
                            ]
                        })
                        const presence = getAttendance?.morningShift?.attendance === "Presence" || getAttendance?.afternoonShift?.attendance === "Presence" ? true : false
                        const morningAttendance = getAttendance?.morningShift?.attendance ? getAttendance?.morningShift?.attendance : "Absence"
                        const afternoonAttendance = getAttendance?.afternoonShift?.attendance ? getAttendance?.afternoonShift?.attendance : "Absence"
                        return {
                            _id: employee?._id,
                            profileImage: employee?.profileImage,
                            latinName: employee?.latinName,
                            presence,
                            attendance: shift === "morning" ? morningAttendance : afternoonAttendance,
                            fine: shift === "morning" ? getAttendance?.morningShift?.fine || 0 : getAttendance?.afternoonShift?.fine || 0,
                            reason: shift === "morning" ? getAttendance?.morningShift?.reason : getAttendance?.afternoonShift?.reason
                        }
                    })
                )
                const data = datas.filter(data => data?.presence === false)
                data.sort(function (a: any, b: any) {
                    if (a.attendance < b.attendance) { return -1; }
                    if (a.attendance > b.attendance) { return 1; }
                    return 0;
                });
                return data;
            } catch (error) {
                return error
            }
        }
    },
    Mutation: {
        employeeCheckAttendance: async (_root: undefined,
            { longitude, latitude, shift, scan }:
                { longitude: string, latitude: string, shift: string, scan: string }
            , { req }: { req: express.Request }
        ) => {
            try {
                const auchCheck = await AuchCheck(req)
                if (!auchCheck.status) {
                    return new Error(auchCheck.message);
                }

                const getEmployee = await Employee.findById(auchCheck?.user?.user_id).populate("branch");
                // check branch ----------------------------------------------------------------------
                if (!getEmployee?.branch) {
                    return {
                        message: "No Branch Allow!",
                        status: false
                    }
                }

                const SchoolDistance = getDistance(
                    {
                        latitude: getEmployee?.branch?.latitude,
                        longitude: getEmployee?.branch?.longitude
                    },
                    {
                        latitude,
                        longitude
                    }
                );

                if (SchoolDistance > 200) {
                    return {
                        message: "Location not Allow!",
                        status: false
                    }
                }
                // check attDuplicate------------------------------------------
                const getAttbyDate = await Attendance.findOne({ attendanceDate: new Date(currentDate()), employeeId: auchCheck?.user?.user_id });
                // morningshift check_in------------------------------------
                const getAttCheck = AttendanceRescord({
                    checkDuplicated: getAttbyDate === null ? false : true,
                    attendanceId: getAttbyDate === null ? null : getAttbyDate._id.toString(),
                    date: new Date(currentDate()),
                    employeeId: auchCheck?.user?.user_id?.toString(),
                    shift,
                    scanAction: scan,
                    attendance: getAttbyDate
                })
                return getAttCheck
            } catch (error) {
                return error
            }
        },
        updateEmployeeAttendance: async (_root: undefined, { input }: { input: iAttendanceInput }) => {
            try {
                if (input?.shift === "morning") {
                    const udpate = await Attendance.findByIdAndUpdate(input?.attendanceId, {
                        remark: input?.remark,
                        morningShift: {
                            attendance: input?.attendance,
                            fine: input?.attendance === "Late" ? 1 : 0,
                            checkIn: input?.checkIn,
                            checkOut: input?.checkOut
                        }
                    });
                    if (udpate) {
                        return MessageRespone(true)
                    } else {
                        return MessageRespone(false)
                    }
                } else {
                    const udpate = await Attendance.findByIdAndUpdate(input?.attendanceId, {
                        remark: input?.remark,
                        afternoonShift: {
                            attendance: input?.attendance,
                            fine: input?.attendance === "Late" ? 1 : 0,
                            checkIn: input?.checkIn,
                            checkOut: input?.checkOut
                        },
                    });
                    if (udpate) {
                        return MessageRespone(true)
                    } else {
                        return MessageRespone(false)
                    }
                }
            } catch (error) {
                return error
            }
        }
    }
}

export default attendanceResolver;