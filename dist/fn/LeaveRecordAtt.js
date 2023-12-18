"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Attendance_1 = __importDefault(require("../models/Attendance"));
const LeaveRecordAtt = async (attendanceDate, employeeId, shiftOff, reason) => {
    const checkAttendance = await Attendance_1.default.findOne({ attendanceDate, employeeId });
    if (checkAttendance && shiftOff === "AllDay") {
        await Attendance_1.default.findByIdAndUpdate(checkAttendance?._id, {
            attendanceDate,
            employeeId,
            morningShift: {
                reason: reason,
                attendance: "Permission",
            },
            afternoonShift: {
                reason: reason,
                attendance: "Permission",
            },
        });
    }
    if (!checkAttendance && shiftOff === "AllDay") {
        await new Attendance_1.default({
            attendanceDate,
            employeeId,
            morningShift: {
                reason: reason,
                attendance: "Permission",
            },
            afternoonShift: {
                reason: reason,
                attendance: "Permission",
            },
        }).save();
    }
    ;
    if (checkAttendance && shiftOff === "Morning") {
        await Attendance_1.default.findByIdAndUpdate(checkAttendance?._id, {
            attendanceDate,
            employeeId,
            morningShift: {
                reason: reason,
                attendance: "Permission",
            }
        });
    }
    if (!checkAttendance && shiftOff === "Morning") {
        await new Attendance_1.default({
            attendanceDate,
            employeeId,
            morningShift: {
                reason: reason,
                attendance: "Permission",
            }
        }).save();
    }
    if (checkAttendance && shiftOff === "Afternoon") {
        await Attendance_1.default.findByIdAndUpdate(checkAttendance?._id, {
            attendanceDate,
            employeeId,
            afternoonShift: {
                reason: reason,
                attendance: "Permission",
            },
        });
    }
    if (!checkAttendance && shiftOff === "Afternoon") {
        await new Attendance_1.default({
            attendanceDate,
            employeeId,
            afternoonShift: {
                reason: reason,
                attendance: "Permission",
            },
        }).save();
    }
};
exports.default = LeaveRecordAtt;
