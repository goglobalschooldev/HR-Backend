// import WrokingTime from '../schema/models/wrokingTime';
// import Attendance from "../schema/models/Attendance";
// import { checkLateTime } from "./caculateTimeLate";

import { iAttendance } from "../interface/iAttendance";
import Attendance from "../models/Attendance";
import { WrokingTime } from "../models/Branch";
import { checkLateTime } from "./checkLateTime";

interface iAttRecod {
    checkDuplicated: Boolean;
    date: Date;
    employeeId: string;
    shift: string;
    scanAction: string;
    attendanceId: string;
    attendance: iAttendance
}
const AttendanceRescord = async (data: iAttRecod) => {
    try {

        const getMorningSchedule = await WrokingTime.findOne({
            employeeId: data?.employeeId,
            shiftName: "Morning"
        })
        const getAfternoonSchedule = await WrokingTime.findOne({
            employeeId: data?.employeeId,
            shiftName: "Afternoon"
        })
        const getTeacherSchedule = await WrokingTime.findOne({
            employeeId: data?.employeeId,
            shiftName: "Hour"
        })

        const getEmpPartTime = await WrokingTime.find({
            employeeId: data?.employeeId,
            shiftName: { $ne: "Hour" }
        })
        const d = new Date();
        let h = d.getHours();
        let m = d.getMinutes();
        let lasH = h.toString().length === 1 ? "0" + h : h;
        let lasM = m.toString().length === 1 ? "0" + m : m;
        let scanAt = lasH + ":" + lasM;
        // // const scan_at = "17:35"
        // // console.log(d,"day")

        // if no working time can not scan with mobile --------------------------------------------------------------------------------------------------------------
        const getWorkingTime = await WrokingTime.find({
            employeeId: data?.employeeId,
        })
        if (getWorkingTime.length === 0) {
            return {
                message: "Not Setup Working Time!",
                status: false
            }
        }
        // ===============================================================================================================================================================================
        // Full time employee check in with Afternoon permission --------------------------------------------------------------------------------------------------------------
        if (data?.checkDuplicated === true && data?.shift === "morning" && data?.attendance?.afternoonShift?.attendance === "Permission" && data?.attendance?.morningShift?.checkIn === "" && data?.scanAction === "checkIn" && getMorningSchedule != null && getAfternoonSchedule != null) {
            let late = checkLateTime(getMorningSchedule.start, scanAt)
            const checkIsafternoonCheckIn = await Attendance.findByIdAndUpdate(data?.attendanceId, {
                morningShift: {
                    name: "Morning",
                    attendance: scanAt > getMorningSchedule.start ? "Late" : "Presence",
                    fine: scanAt > getMorningSchedule.start ? 1 : null,
                    late: scanAt > getMorningSchedule.start ? late : "",
                    checkIn: scanAt
                }
            })

            if (checkIsafternoonCheckIn) {
                return {
                    message: "Morning Check-In Success!",
                    status: true
                }
            }

        }

        // Full time employee check in at the morning or late --------------------------------------------------------------------------------------------------------------
        if (data?.checkDuplicated === false && data?.shift === "morning" && data?.scanAction === "checkIn" && getMorningSchedule != null && getAfternoonSchedule != null) {
            let late = checkLateTime(getMorningSchedule.start, scanAt)
            const CreateAtt = await new Attendance({
                employeeId: data?.employeeId,
                attendanceDate: data?.date,
                morningShift: {
                    name: "Morning",
                    attendance: scanAt > getMorningSchedule.start ? "Late" : "Presence",
                    fine: scanAt > getMorningSchedule.start ? 1 : null,
                    late: scanAt > getMorningSchedule.start ? late : "",
                    checkIn: scanAt
                }

            }).save();

            if (CreateAtt) {
                return {
                    message: "Morning Check-In Success!",
                    status: true
                }
            }

        }

        // // Full time employee Duplicated check in at the morning --------------------------------------------------------------------------------------------------------------
        if (data?.checkDuplicated === true && data?.shift === "morning" && data?.scanAction === "checkIn" && getMorningSchedule != null && getAfternoonSchedule != null) {
            return {
                message: "Morning Check-In Duplicated!",
                status: false
            }
        }

        // // Full time employee check in at the afternoon or late --------------------------------------------------------------------------------------------------------------
        if (data?.checkDuplicated === true && data?.shift === "afternoon" && data?.scanAction === "checkIn" && getMorningSchedule != null && getAfternoonSchedule != null) {
            let late = checkLateTime(getAfternoonSchedule.start, scanAt)
            const updateAttAfternoonCheckin = await Attendance.findByIdAndUpdate(data?.attendanceId, {
                "afternoonShift.checkIn": scanAt,
                "afternoonShift.attendance": scanAt > getAfternoonSchedule?.start ? "Late" : "Presence",
                "afternoonShift.fine": scanAt > getAfternoonSchedule?.start ? 1 : null,
                "afternoonShift.late": scanAt > getAfternoonSchedule?.start ? late : "",
            })
            if (updateAttAfternoonCheckin) {
                return {
                    message: "Afternoon Check-In Success!",
                    status: true
                }
            }
        }

        // // Full time employee not check in at the morning --------------------------------------------------------------------------------------------------------------
        if (data?.checkDuplicated === false && data?.shift === "morning" && data?.scanAction === "checkOut" && getMorningSchedule != null && getAfternoonSchedule != null) {
            return {
                message: "Did you check-in?",
                status: false
            }
        }

        // Full time employee not check in at the morning --------------------------------------------------------------------------------------------------------------
        if (data?.checkDuplicated === false && data?.shift === "afternoon" && data?.scanAction === "checkOut" && getMorningSchedule != null && getAfternoonSchedule != null) {
            return {
                message: "Did you check-in?",
                status: false
            }
        }

        // Full time employee check out at the morning --------------------------------------------------------------------------------------------------------------
        if (data?.checkDuplicated === true && data?.shift === "morning" && data?.scanAction === "checkOut" && getMorningSchedule != null && getAfternoonSchedule != null) {
            const updateAttAfternoonCheckout = await Attendance.findByIdAndUpdate(data?.attendanceId, {
                "morningShift.checkOut": scanAt,
            })
            if (updateAttAfternoonCheckout) {
                return {
                    message: "Morning Check-Out Success!",
                    status: true
                }
            }
        }
        // Full time employee check out at the afternoon --------------------------------------------------------------------------------------------------------------
        if (data?.checkDuplicated === true && data?.shift === "afternoon" && data?.scanAction === "checkOut" && getMorningSchedule != null && getAfternoonSchedule != null) {

            const updateAttAfternoonCheckout = await Attendance.findByIdAndUpdate(data?.attendanceId, {
                "afternoonShift.checkOut": scanAt,
            })
            if (updateAttAfternoonCheckout) {
                return {
                    message: "Afternoon Check-Out Success!",
                    status: true
                }
            }

        }

        // ===============================================================================================================================================================================
        //  Part time employee check in at the morning--------------------------------------------------------------------------------------------------------------
        if (data?.checkDuplicated === false && data?.scanAction === "checkIn" && getEmpPartTime.length === 1) {
            let late = checkLateTime(getEmpPartTime[0]?.start, scanAt)
            // ["Presence", "Permission", "Absence", "Late", "Not check in", "Early Check in", "Early Check out"]

            const morningShift = getEmpPartTime[0]?.shiftName === "Morning" ? {
                name: "Morning",
                attendance: scanAt > getEmpPartTime[0]?.start ? "Late" : "Presence",
                fine: scanAt > getEmpPartTime[0]?.start ? 1 : null,
                late: scanAt > getEmpPartTime[0]?.start ? late : '',
                checkIn: scanAt,
            } : null;

            const afternoonShift = getEmpPartTime[0]?.shiftName === "Afternoon" ? {
                name: "Afternoon",
                attendance: scanAt > getEmpPartTime[0]?.start ? "Late" : "Presence",
                fine: scanAt > getEmpPartTime[0].start ? 1 : null,
                late: getEmpPartTime[0]?.shiftName === "Afternoon" && scanAt > getEmpPartTime[0].start ? late : '',
                checkIn: scanAt,
            } : null;

            const createAtt = await new Attendance({
                employeeId: data?.employeeId,
                attendanceDate: data?.date,
                morningShift: morningShift,
                afternoonShift: afternoonShift
            }).save()
            if (createAtt) {
                return {
                    message: `${getEmpPartTime[0]?.shiftName} Check-In Success!`,
                    status: true
                }
            }
        }

        // Part time  employee Duplicated check in--------------------------------------------------------------------------------------------------------------
        if (data?.checkDuplicated === true && data?.scanAction === "checkIn" && getEmpPartTime.length === 1) {
            return {
                message: "Morning Check-In Duplicated!",
                status: false
            }
        }

        // Part time  employee check out--------------------------------------------------------------------------------------------------------------
        if (data?.checkDuplicated === true && data?.scanAction === "checkOut" && getEmpPartTime.length === 1) {
            const updateLaue = getEmpPartTime[0]?.shiftName === "Morning" ? { "morningShift.checkOut": scanAt } : { "afternoonShift.checkOut": scanAt }

            const updateAttAfternoonCheckout = await Attendance.findByIdAndUpdate(data?.attendanceId, updateLaue)
            if (updateAttAfternoonCheckout)
                return {
                    message: `${getEmpPartTime[0]?.shiftName} Check-Out Success!`,
                    status: true
                }
        }

        // Part time  employee not check in--------------------------------------------------------------------------------------------------------------
        if (data?.checkDuplicated === false && data?.scanAction === "checkOut" && getEmpPartTime.length === 1) {
            return {
                message: "Did you check-in?",
                status: false
            }
        }

        // ===============================================================================================================================================================================

        // Teacher Check In Mornning   -------------------------------------------------------------------------------------------------------------------------------
        if (data?.checkDuplicated === false && data?.scanAction === "checkIn" && getTeacherSchedule != null) {
            const morningShift = data?.shift === "morning" ? {
                name: "Morning",
                attendance: "Presence",
                checkIn: scanAt,
            } : null;

            const afternoonShift = data?.shift === "afternoon" ? {
                name: "Afternoon",
                attendance: "Presence",
                checkIn: scanAt,
            } : null;

            const createAtt = await new Attendance({
                employeeId: data?.employeeId,
                attendanceDate: data?.date,
                morningShift: morningShift,
                afternoonShift: afternoonShift
            }).save()
            if (createAtt) {
                return {
                    message: `${data?.shift} check-in success!`,
                    status: true
                }
            }
        }

        // Teacher Check In Mornning Duplicated  -------------------------------------------------------------------------------------------------------------------------------
        if (data?.checkDuplicated === true && data?.scanAction === "checkIn" && getTeacherSchedule != null) {

            if (data?.shift === "morning") {
                return {
                    message: `${data?.shift} check-in Duplicated!`,
                    status: false
                }
            }

        }
        // Teacher Check Out Mornning  -------------------------------------------------------------------------------------------------------------------------------

        if (data?.checkDuplicated === true && data?.scanAction === "checkOut" && getTeacherSchedule != null) {

            if (data?.shift === "morning") {
                const updateAttmorningCheckout = await Attendance.findByIdAndUpdate(data?.attendanceId, {
                    "morningShift.checkOut": scanAt,
                })
                return {
                    message: `${data?.shift} check-out Success!`,
                    status: true
                }
            }

        }

        // Teacher Check In Afternoon  -------------------------------------------------------------------------------------------------------------------------------

        if (data?.checkDuplicated === true && data?.scanAction === "checkIn" && getTeacherSchedule != null) {

            if (data?.shift === "afternoon") {
                const updateAttAfternoonCheckout = await Attendance.findByIdAndUpdate(data?.attendanceId, {
                    "afternoonShift.checkIn": scanAt,
                })
                return {
                    message: `${data?.shift} check-in Success!`,
                    status: true
                }
            }

        }

        // Teacher Check Out Afternoon -------------------------------------------------------------------------------------------------------------------------------
        if (data?.checkDuplicated === true && data?.scanAction === "checkOut" && getTeacherSchedule != null) {

            if (data?.shift === "afternoon") {
                const updateAttmorningCheckout = await Attendance.findByIdAndUpdate(data?.attendanceId, {
                    "afternoonShift.check_out": scanAt,
                })
                return {
                    message: `${data?.shift} check-out Success!`,
                    status: true
                }
            }

        }

        // Teacher not Checkin -------------------------------------------------------
        return {
            message: "Not Record! please contact IT Team!",
            status: false
        }

    } catch (error) {
        // console.log(error);
        return error
    }
}

export default AttendanceRescord;