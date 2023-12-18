"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AuchCheck_1 = __importDefault(require("../../auth/AuchCheck"));
const Attendance_1 = __importDefault(require("../../models/Attendance"));
const mongoose_1 = __importDefault(require("mongoose"));
const Employee_1 = __importDefault(require("../../models/Employee"));
const Contract_1 = require("../../models/Contract");
const Shift_1 = __importDefault(require("../../models/Shift"));
const currentDate_1 = require("../../fn/currentDate");
const AuthAdmin_1 = __importDefault(require("../../auth/AuthAdmin"));
const EmployeePublicHoliday_1 = __importDefault(require("../../models/EmployeePublicHoliday"));
const countTotalArray_1 = require("../../fn/countTotalArray");
const moment_1 = __importDefault(require("moment"));
const Notification_1 = __importDefault(require("../../models/Notification"));
const MobileResolver = {
    Query: {
        getAttendanceMobile: async (_root, { limit }, { req }) => {
            try {
                const auchCheck = await (0, AuchCheck_1.default)(req);
                if (!auchCheck.status) {
                    return new Error(auchCheck.message);
                }
                const getAtt = await Attendance_1.default.find({
                    $and: [
                        { employeeId: new mongoose_1.default.Types.ObjectId(auchCheck?.user?.user_id?.toString()) },
                    ]
                }).limit(limit).populate([
                    {
                        path: 'employeeId',
                        populate: [{ path: 'branch' }]
                    },
                ]);
                const data = getAtt.map((data) => {
                    const attendances = {
                        morning: `Morning :${data?.morningShift?.attendance}`,
                        afternoon: `Afternoon :${data?.afternoonShift?.attendance}`
                    };
                    return {
                        _id: data?.employeeId?._id,
                        date: data?.attendanceDate,
                        latinName: data?.employeeId?.latinName,
                        morning: `${data?.morningShift?.checkIn}-${data?.morningShift?.checkOut}`,
                        afternoon: `${data?.afternoonShift?.checkIn}-${data?.afternoonShift?.checkOut}`,
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
        },
        getUserInfoMobile: async (_root, {}, { req }) => {
            try {
                const auchCheck = await (0, AuchCheck_1.default)(req);
                if (!auchCheck.status) {
                    return new Error(auchCheck.message);
                }
                const getUser = await Employee_1.default.findById(auchCheck?.user?.user_id?.toString());
                const getContract = await Contract_1.Contract.findOne({
                    employeeId: new mongoose_1.default.Types.ObjectId(auchCheck?.user?.user_id?.toString()),
                    status: false
                }).populate("position");
                return {
                    profileImage: getUser?.profileImage,
                    latinName: getUser?.latinName,
                    position: getContract?.position?.position
                };
            }
            catch (error) {
                return error;
            }
        },
        getEmployeeOnHoliday: async (_root, {}, { req }) => {
            try {
                const auchCheck = await (0, AuchCheck_1.default)(req);
                if (!auchCheck.status) {
                    return new Error(auchCheck.message);
                }
                const geShifts = await Shift_1.default.find({
                    from: { $gte: new Date((0, currentDate_1.currentDate)()) },
                    approveStatus: "approve"
                }).populate("timeOff requestBy cancelBy approveBy");
                const data = geShifts.map((data) => {
                    let from = (0, moment_1.default)(data?.from).format('DD');
                    let t = (0, moment_1.default)(data?.to).format('DD');
                    let to = (0, moment_1.default)(data?.to).format('DD MMM YY');
                    return {
                        _id: data?._id,
                        profileImage: data?.requestBy?.profileImage,
                        latinName: data?.requestBy?.latinName,
                        reason: data?.reason,
                        dateLeave: from === t ? "Only Today" : from + "-" + to
                    };
                });
                return data;
            }
            catch (error) {
                return error;
            }
        },
        forgortUserPassword: async (_root, { email }) => {
            try {
                const forgortPass = await AuthAdmin_1.default.forgotPassword(email);
                return {
                    status: forgortPass.status,
                    title: forgortPass.message,
                    description: forgortPass.des
                };
            }
            catch (error) {
                return error;
            }
        },
        getEmployeeLeaveInfo: async (_root, { employeeId }) => {
            try {
                const getAl = await EmployeePublicHoliday_1.default.findOne({ status: true });
                const currentDate = new Date();
                const currentYear = currentDate.getFullYear();
                const MoningPermission = await Attendance_1.default.find({
                    $and: [
                        { employeeId: new mongoose_1.default.Types.ObjectId(employeeId) },
                        { "morningShift.attendance": "Permission" },
                        {
                            $expr: {
                                $eq: [{ $year: '$attendanceDate' }, currentYear],
                            }
                        },
                    ]
                });
                const AfternoonPermission = await Attendance_1.default.find({
                    $and: [
                        { employeeId: new mongoose_1.default.Types.ObjectId(employeeId) },
                        { "afternoonShift.attendance": "Permission" },
                        {
                            $expr: {
                                $eq: [{ $year: '$attendanceDate' }, currentYear],
                            }
                        },
                    ]
                });
                const MoningLate = await Attendance_1.default.find({
                    $and: [
                        { employeeId: new mongoose_1.default.Types.ObjectId(employeeId) },
                        { "morningShift.attendance": "Late" },
                        {
                            $expr: {
                                $eq: [{ $year: '$attendanceDate' }, currentYear],
                            }
                        },
                    ]
                });
                const AfternoonLate = await Attendance_1.default.find({
                    $and: [
                        { employeeId: new mongoose_1.default.Types.ObjectId(employeeId) },
                        { "afternoonShift.attendance": "Late" },
                        {
                            $expr: {
                                $eq: [{ $year: '$attendanceDate' }, currentYear],
                            }
                        },
                    ]
                });
                const fineMorning = MoningLate.map((mr) => mr?.morningShift?.fine);
                const fineAfternoon = AfternoonLate.map((mr) => mr?.afternoonShift?.fine);
                const totalMornigfine = (0, countTotalArray_1.countTotalArray)(fineMorning);
                const totalAfternoonfin = (0, countTotalArray_1.countTotalArray)(fineAfternoon);
                const totalLeave = MoningPermission.length + AfternoonPermission.length;
                const permission = totalLeave / 2;
                const totalLate = AfternoonLate.length + MoningLate.length;
                const late = totalLate / 2;
                return {
                    al: getAl?.totalDay - permission,
                    permission: permission,
                    late,
                    fine: totalAfternoonfin + totalMornigfine
                };
            }
            catch (error) {
                return error;
            }
        },
        getLeaveListForMobile: async (_root, { limit }, { req }) => {
            try {
                const auchCheck = await (0, AuchCheck_1.default)(req);
                if (!auchCheck.status) {
                    return new Error(auchCheck.message);
                }
                const getShifts = await Shift_1.default.find({ requestBy: new mongoose_1.default.Types.ObjectId(auchCheck?.user?.user_id?.toString()) }).limit(limit);
                const data = getShifts.map((shift) => {
                    let from = (0, moment_1.default)(shift?.from).format('DD');
                    let to = (0, moment_1.default)(shift?.to).format('DD MMM YY');
                    return {
                        _id: shift?._id,
                        description: shift?.reason,
                        date: from + "-" + to,
                        shife: shift?.shiftOff,
                        status: shift?.approveStatus
                    };
                });
                return data;
            }
            catch (error) {
                return error;
            }
        },
        getNotifications: async (_root, { limit }, { req }) => {
            try {
                const auchCheck = await (0, AuchCheck_1.default)(req);
                if (!auchCheck.status) {
                    return new Error(auchCheck.message);
                }
                const data = await Notification_1.default.find({ forUser: { $elemMatch: { $in: auchCheck?.user?.user_id?.toString() } } }).limit(limit);
                return data;
            }
            catch (error) {
                return error;
            }
        },
    }
};
exports.default = MobileResolver;
