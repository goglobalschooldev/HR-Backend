import Attendance from "../models/Attendance"

const LeaveRecordAtt = async (attendanceDate: Date, employeeId: string, shiftOff: string, reason: string) => {

    const checkAttendance = await Attendance.findOne({ attendanceDate, employeeId });

    // allday ==============================================================================
    if (checkAttendance && shiftOff === "AllDay") {
        await Attendance.findByIdAndUpdate(checkAttendance?._id, {
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
        })
    }
    if (!checkAttendance && shiftOff === "AllDay") {
        await new Attendance({
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
        }).save()
    };

    // Morning ==============================================================================
    if (checkAttendance && shiftOff === "Morning") {
        await Attendance.findByIdAndUpdate(checkAttendance?._id, {
            attendanceDate,
            employeeId,
            morningShift: {
                reason: reason,
                attendance: "Permission",
            }
        })
    }
    if (!checkAttendance && shiftOff === "Morning") {
        await new Attendance({
            attendanceDate,
            employeeId,
            morningShift: {
                reason: reason,
                attendance: "Permission",
            }
        }).save()
    }

    // Afternoon ==============================================================================
    if (checkAttendance && shiftOff === "Afternoon") {
        await Attendance.findByIdAndUpdate(checkAttendance?._id, {
            attendanceDate,
            employeeId,
            afternoonShift: {
                reason: reason,
                attendance: "Permission",
            },
        })
    }
    if (!checkAttendance && shiftOff === "Afternoon") {
        await new Attendance({
            attendanceDate,
            employeeId,
            afternoonShift: {
                reason: reason,
                attendance: "Permission",
            },
        }).save()
    }
}

export default LeaveRecordAtt;