import mongoose from "mongoose";
import Employee from "../../models/Employee"
import { currentDate } from "../../fn/currentDate";
import { Affair, Office, Position, Section, WrokingTime } from "../../models/Branch";
import EmployeeWarning from "../../models/EmployeeWarning";
import EmployeePublicHoliday from "../../models/EmployeePublicHoliday";
import { ContactType } from "../../models/Contract";
import { Evaluation } from "../../models/Evaluation";
import Shift from "../../models/Shift";
// import att from '../../db/att.json';
// import employees from '../../db/employees.json';
import Attendance from "../../models/Attendance";
import removeDuplicates from "../../fn/removeDuplicates";
import moment from "moment";
const generate = {
    Query: {
        generateData: async (_root: undefined) => {
            try {
                const empId = new mongoose.Types.ObjectId("635f892882da276b1b9ac282")
                const getAttmorningShift = await Attendance.aggregate([
                    { $match: { employeeId: empId } },
                    { $match: { "morningShift.attendance": "Permission" } },
                ]);
                const getAttafternoonShift = await Attendance.aggregate([
                    { $match: { employeeId: empId } },
                    { $match: { "afternoonShift.attendance": "Permission" } },
                ]);

                const getAttmorningShiftId = getAttmorningShift.map(da => da._id.toString())
                const getAttafternoonShiftId = getAttafternoonShift.map(da => da._id.toString())
                const totalID = [...getAttafternoonShiftId, ...getAttmorningShiftId]
                const reDuplicates = removeDuplicates(totalID);
                const data = await Promise.all(reDuplicates.map(async (permision: string) => {
                    const getAtt = await Attendance.findById(permision);

                    let attendanceDate = moment(getAtt?.attendanceDate).format('MMM');
                    return attendanceDate
                }))
                console.log(data.sort());
                // console.log(totalID.length / 2);
                // console.log(data.length / 2);



                // await new Attendance({
                //     attendanceDate: currentDate(new Date("2023-03-02")),
                //     employeeId: empId,
                //     // morningShift: {
                //     //     reason: "Update System",
                //     //     attendance: "Permission",
                //     // },
                //     afternoonShift: {
                //         reason: "Update System",
                //         attendance: "Permission",
                //     },
                // }).save()








                // console.log(reDuplicates.length / 2);
                // branchs da new ✅
                // employees(id cared) ✅
                // employees.map(async (emp: any) => {
                //     await Employee.findByIdAndUpdate(emp?._id?.$oid, {
                //         type: emp?.type

                //     })
                // await new Employee({
                //     _id: emp?._id?.$oid,
                //     nationalId: emp?.national_id,
                //     employeeId: emp?.employee_id,
                //     firstName: emp?.khmer_name?.first_name,
                //     lastName: emp?.khmer_name?.last_name,
                //     latinName: emp?.latin_name?.first_name + " " + emp?.latin_name?.last_name,
                //     gender: emp?.gender,
                //     profileImage: emp?.image?.src,
                //     joinDate: emp?.join_date?.$date,
                //     dob: emp?.date_of_birth?.$date,
                //     placeOfBirth: emp?.place_of_birth,
                //     nationality: emp?.nationality,
                //     tell: emp?.phone,
                //     email: emp?.email,
                //     currentAddress: emp?.current_address,
                //     // idCard: Schema.Types.ObjectId,
                //     branch: new mongoose.Types.ObjectId("657d6d2d5dad38a23ed2f04e"),
                //     workingStatus: emp?.working_status,
                //     marital: emp?.marital,
                //     workBook: emp?.work_book,
                //     role: emp?.adminRole
                // }).save()
                // })
                // id card  ✅

                // idcard.map(async (idcard: any) => {
                //     await Employee.findByIdAndUpdate(idcard?.emp_obj_id?.$oid, { idCard: idcard?._id?.$oid })
                // })
                // employeeWarnings  ✅
                // employeewarnings.map(async (waning: any) => {
                //     await new EmployeeWarning({
                //         employeeId: waning?.employee?.$oid,
                //         date: waning?.date?.$date,
                //         description: waning?.description,
                //         resolution: waning?.resolution,
                //         result: waning?.result,
                //         remark: waning?.remark,
                //     }).save()
                // })

                // employeePublicHolidays   ✅
                // const employees = await Employee.find()
                // employees.map(async (emp: any) => {
                //     await new EmployeePublicHoliday({
                //         employeeId: emp?._id,
                //         title: new mongoose.Types.ObjectId("657d742389c7458cc2f5f4de"),
                //         totalDay: 18,
                //         year: "2023",
                //         status: true
                //     }).save()
                // })

                //workingTimes ✅
                // wrokingtimes.map(async (time: any) => {
                //     await new WrokingTime({
                //         employeeId: time?.emp_id?.$oid,
                //         shiftName: time?.shift_name,
                //         start: time?.start,
                //         end: time?.end,
                //     }).save()
                // })

                // affairs ✅
                // affair.map(async (aff: any) => {
                //     await new Affair({
                //         _id: aff?._id?.$oid,
                //         affairName: aff?.affair_name,
                //     }).save()
                // })
                // offices  ✅

                // offices.map(async (aff: any) => {
                //     await new Office({
                //         _id: aff?._id?.$oid,
                //         officeName: aff?.office_name,
                //     }).save()
                // })
                // sections✅
                // sections.map(async (aff: any) => {
                //     await new Section({
                //         _id: aff?._id?.$oid,
                //         sectionName: aff?.section_name,
                //     }).save()
                // })

                // positions✅
                // positions.map(async (aff: any) => {
                //     await new Position({
                //         _id: aff?._id?.$oid,
                //         position: aff?.name,
                //     }).save()
                // })

                // contractTypes✅ 
                // contractTypes.map(async (aff: any) => {
                //     await new ContactType({
                //         _id: aff?._id?.$oid,
                //         title: aff?.title,
                //     }).save()
                // })

                // attendances
                // shifts
                // shifts.map(async (aff: any) => {
                //     // console.log(aff?.shiftOfff);
                //     await new Shift({
                //         from: aff?.from?.$date,
                //         to: aff?.to?.$date,
                //         shiftOff: aff?.shiftOfff?.$oid,
                //         reason: aff?.reason,
                //         timeOff: new mongoose.Types.ObjectId("657d742389c7458cc2f5f4de"),
                //         requestBy: aff?.request_by?.$oid,
                //         approveBy: new mongoose.Types.ObjectId("634f9edb28216566b493618d"),
                //         approveStatus: aff?.approve_status,
                //         hrComment: aff?.hrComment,
                //         // requestAt: aff,
                //     }).save()
                // })
                // evaluates ✅ 
                // evaluations.map(async (aff: any) => {
                //     await new Evaluation({
                //         _id: aff?._id?.$oid,
                //         title: aff?.title,
                //         evaluations: aff?.evaluations
                //     }).save()
                // })
                // att.map(async (att: any) => {
                // "_id": {
                //     "$oid": "6583e6926456ae2591af6e71"
                //   },
                //   "employee_id": {
                //     "$oid": "6361b7ba82da276b1b9b0c4c"
                //   },
                //   "attendance_Date": {
                //     "$date": "2023-12-21T00:00:00.000Z"
                //   },
                //   "morningshift": {
                //     "name": "Morning",
                //     "reason": null,
                //     "attendance": null,
                //     "fine": null,
                //     "late_as_minutes": "",
                //     "check_in": "",
                //     "check_out": ""
                //   },
                //   "afternoonshift": {
                //     "name": "Afternoon",
                //     "reason": null,
                //     "attendance": null,
                //     "fine": null,
                //     "late_as_minutes": "1:17",
                //     "check_in": "01:00",
                //     "check_out": ""
                //   },
                //   "created_at": {
                //     "$date": "2023-12-21T07:17:38.694Z"
                //   },
                //     await new Attendance({
                //         employeeId: att?.employee_id?.$oid,
                //         attendanceDate: att?.attendance_Date?.$date,
                //         morningShift: {
                //             name: "Morning",
                //             reason: att?.morningshift?.reason,
                //             attendance: att?.morningshift?.attendance,
                //             fine: att?.morningshift?.fine,
                //             late: att?.morningshift?.late_as_minutes,
                //             checkIn: att?.morningshift?.check_in,
                //             checkOut: att?.morningshift?.check_out
                //         },
                //         afternoonShift: {
                //             name: "Afternoon",
                //             reason: att?.afternoonShift?.reason,
                //             attendance: att?.afternoonShift?.attendance,
                //             fine: att?.afternoonShift?.fine,
                //             late: att?.afternoonShift?.late_as_minutes,
                //             checkIn: att?.afternoonShift?.check_in,
                //             checkOut: att?.afternoonShift?.check_out
                //         },
                //     }).save()
                // })
            } catch (error) {
                return error
            }
        }
    }
}

export default generate;