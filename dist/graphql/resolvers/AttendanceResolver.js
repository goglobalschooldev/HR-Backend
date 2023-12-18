"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AuchCheck_1 = __importDefault(require("../../auth/AuchCheck"));
const AttendanceRescord_1 = __importDefault(require("../../fn/AttendanceRescord"));
const currentDate_1 = require("../../fn/currentDate");
const Attendance_1 = __importDefault(require("../../models/Attendance"));
const Employee_1 = __importDefault(require("../../models/Employee"));
const geolib_1 = require("geolib");
const paginationLabel_1 = require("../../fn/paginationLabel");
const mongoose_1 = __importDefault(require("mongoose"));
const MessageRespone_1 = __importDefault(require("../../fn/MessageRespone"));
const attendanceResolver = {
    Query: {
        getAttendancePagination: async (_root, { page, limit, keyword, branchId, date }) => {
            try {
                const options = {
                    page: page || 1,
                    limit: limit || 10,
                    customLabels: paginationLabel_1.paginationLabel,
                    pagination: true,
                    populate: [
                        {
                            path: 'employeeId',
                            populate: [{ path: 'branch' }]
                        },
                    ]
                };
                const branchIdQuery = branchId === "All" ? {} : { branch: new mongoose_1.default.Types.ObjectId(branchId) };
                const getEmployees = await Employee_1.default.find({
                    $and: [
                        branchIdQuery,
                        { latinName: { $regex: keyword, $options: "i" } }
                    ]
                });
                const employeeIds = getEmployees.map(emp => emp?._id?.toString());
                const query = {
                    $and: [
                        { employeeId: { $in: employeeIds } },
                        { attendanceDate: new Date(date) }
                    ]
                };
                const getAttendances = await Attendance_1.default.paginate(query, options);
                const data = getAttendances?.data?.map((data) => {
                    const attendances = {
                        morning: data?.morningShift?.attendance,
                        afternoon: data?.afternoonShift?.attendance
                    };
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
                    };
                });
                return {
                    data,
                    paginator: getAttendances?.paginator
                };
            }
            catch (error) {
                return error;
            }
        },
        getEmployeeAttendance: async (_root, { employeeId, from, to, limit }) => {
            try {
                const fromQuery = from.length === 0 ? {} : {
                    attendanceDate: { $gte: new Date(from) }
                };
                const toQuery = to.length === 0 ? {} : {
                    attendanceDate: { $lte: new Date(to) }
                };
                const getAtt = await Attendance_1.default.find({
                    $and: [
                        { employeeId: new mongoose_1.default.Types.ObjectId(employeeId) },
                        fromQuery,
                        toQuery
                    ]
                }).limit(limit).populate([
                    {
                        path: 'employeeId',
                        populate: [{ path: 'branch' }]
                    },
                ]);
                const data = getAtt.map((data) => {
                    const attendances = {
                        morning: data?.morningShift?.attendance,
                        afternoon: data?.afternoonShift?.attendance
                    };
                    return {
                        _id: data?.employeeId?._id,
                        date: data?.attendanceDate,
                        lanitnName: data?.employeeId?.latinName,
                        morning: `${data?.morningShift?.checkIn} - ${data?.morningShift?.checkOut}`,
                        afternoon: `${data?.afternoonShift?.checkIn} - ${data?.afternoonShift?.checkOut}`,
                        attendances,
                        fine: data?.morningShift?.fine + data?.afternoonShift?.fine,
                        branch: data?.employeeId?.branch?.branchName
                    };
                });
                return data;
            }
            catch (error) {
                return error;
            }
        }
    },
    Mutation: {
        employeeCheckAttendance: async (_root, { longitude, latitude, shift, scan }, { req }) => {
            try {
                const auchCheck = await (0, AuchCheck_1.default)(req);
                if (!auchCheck.status) {
                    return new Error(auchCheck.message);
                }
                const getEmployee = await Employee_1.default.findById(auchCheck?.user?.user_id).populate("branch");
                if (!getEmployee?.branch) {
                    return {
                        message: "No Branch Allow!",
                        status: false
                    };
                }
                const SchoolDistance = (0, geolib_1.getDistance)({
                    latitude: getEmployee?.branch?.latitude,
                    longitude: getEmployee?.branch?.longitude
                }, {
                    latitude,
                    longitude
                });
                if (SchoolDistance > 200) {
                    return {
                        message: "Location not Allow!",
                        status: false
                    };
                }
                const getAttbyDate = await Attendance_1.default.findOne({ attendanceDate: new Date((0, currentDate_1.currentDate)()), employeeId: auchCheck?.user?.user_id });
                const getAttCheck = (0, AttendanceRescord_1.default)({
                    checkDuplicated: getAttbyDate === null ? false : true,
                    attendanceId: getAttbyDate === null ? null : getAttbyDate._id.toString(),
                    date: new Date((0, currentDate_1.currentDate)()),
                    employeeId: auchCheck?.user?.user_id?.toString(),
                    shift,
                    scanAction: scan,
                    attendance: getAttbyDate
                });
                return getAttCheck;
            }
            catch (error) {
                return error;
            }
        },
        updateEmployeeAttendance: async (_root, { input }) => {
            try {
                if (input?.shift === "morning") {
                    const udpate = await Attendance_1.default.findByIdAndUpdate(input?.attendanceId, {
                        remark: input?.remark,
                        morningShift: {
                            attendance: input?.attendance,
                            fine: input?.attendance === "Late" ? 1 : 0,
                            checkIn: input?.checkIn,
                            checkOut: input?.checkOut
                        }
                    });
                    if (udpate) {
                        return (0, MessageRespone_1.default)(true);
                    }
                    else {
                        return (0, MessageRespone_1.default)(false);
                    }
                }
                else {
                    const udpate = await Attendance_1.default.findByIdAndUpdate(input?.attendanceId, {
                        remark: input?.remark,
                        afternoonShift: {
                            attendance: input?.attendance,
                            fine: input?.attendance === "Late" ? 1 : 0,
                            checkIn: input?.checkIn,
                            checkOut: input?.checkOut
                        },
                    });
                    if (udpate) {
                        return (0, MessageRespone_1.default)(true);
                    }
                    else {
                        return (0, MessageRespone_1.default)(false);
                    }
                }
            }
            catch (error) {
                return error;
            }
        }
    }
};
exports.default = attendanceResolver;
