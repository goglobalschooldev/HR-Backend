import { ObjectId } from "mongodb";
import { iEmployee } from "./iEmployee";

export interface iAttendance {
    _id: ObjectId;
    employeeId: iEmployee;
    attendanceDate: Date;
    morningShift: iAttendanceShift;
    afternoonShift: iAttendanceShift;
    remark: string;
    createdAt: Date;
}
interface iAttendanceShift {
    name: string;
    reason: string;
    attendance: string;
    fine: number;
    late: string;
    checkIn: string;
    checkOut: string;
}
export interface iAttendanceInput {
    attendanceId: string;
    shift: string;
    attendance: string;
    checkIn: string;
    checkOut: string;
    remark: string;
}