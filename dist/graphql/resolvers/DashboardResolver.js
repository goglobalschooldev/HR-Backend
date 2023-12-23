"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Attendance_1 = __importDefault(require("../../models/Attendance"));
const Employee_1 = __importDefault(require("../../models/Employee"));
const currentDate_1 = require("../../fn/currentDate");
const DashboardResolver = {
    Query: {
        getDashboardInfo: async (_root, {}) => {
            try {
                const getEmployees = await Employee_1.default.find();
                const totalEmp = getEmployees.filter(total => total?.workingStatus === "working");
                const totalresign = getEmployees.filter(total => total?.workingStatus === "resign");
                const MoningLate = await Attendance_1.default.find({
                    $and: [
                        { "morningShift.attendance": "Late" },
                        { attendanceDate: new Date((0, currentDate_1.currentDate)()) }
                    ]
                });
                const AfternoonLate = await Attendance_1.default.find({
                    $and: [
                        { "afternoonShift.attendance": "Late" },
                        { attendanceDate: new Date((0, currentDate_1.currentDate)()) }
                    ]
                });
                const totalLAte = MoningLate.length + AfternoonLate.length;
                const MoningPermission = await Attendance_1.default.find({
                    $and: [
                        { "morningShift.attendance": "Permission" },
                        { attendanceDate: new Date((0, currentDate_1.currentDate)()) }
                    ]
                });
                const AfternoonPermission = await Attendance_1.default.find({
                    $and: [
                        { "afternoonShift.attendance": "Permission" },
                        { attendanceDate: new Date((0, currentDate_1.currentDate)()) }
                    ]
                });
                const totalPermission = AfternoonPermission.length + MoningPermission.length;
                return {
                    totalEmployee: totalEmp.length,
                    totalResign: totalresign.length,
                    todayLate: totalLAte / 2,
                    todayPermision: totalPermission / 2
                };
            }
            catch (error) {
                return error;
            }
        }
    }
};
exports.default = DashboardResolver;
