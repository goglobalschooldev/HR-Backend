import Attendance from "../../models/Attendance";
import Employee from "../../models/Employee";
import { currentDate } from "../../fn/currentDate";

const DashboardResolver = {
    Query: {
        getDashboardInfo: async (_root: undefined, { }: {}) => {
            try {

                const getEmployees = await Employee.find();
                const totalEmp = getEmployees.filter(total => total?.workingStatus === "working");
                const totalresign = getEmployees.filter(total => total?.workingStatus === "resign");

                const MoningLate = await Attendance.find({
                    $and: [
                        { "morningShift.attendance": "Late" },
                        { attendanceDate: new Date(currentDate()) }
                    ]
                })
                const AfternoonLate = await Attendance.find({
                    $and: [
                        { "afternoonShift.attendance": "Late" },
                        { attendanceDate: new Date(currentDate()) }
                    ]
                })
                const totalLAte = MoningLate.length + AfternoonLate.length

                const MoningPermission = await Attendance.find({
                    $and: [
                        { "morningShift.attendance": "Permission" },
                        { attendanceDate: new Date(currentDate()) }
                    ]
                })
                const AfternoonPermission = await Attendance.find({
                    $and: [
                        { "afternoonShift.attendance": "Permission" },
                        { attendanceDate: new Date(currentDate()) }
                    ]
                })
                const totalPermission = AfternoonPermission.length + MoningPermission.length

                return {
                    totalEmployee: totalEmp.length,
                    totalResign: totalresign.length,
                    todayLate: totalLAte / 2,
                    todayPermision: totalPermission / 2
                }
            } catch (error) {
                return error
            }
        }
    }
};
export default DashboardResolver;