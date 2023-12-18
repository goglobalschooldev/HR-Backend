import mongoose, { Schema, model } from "mongoose"
import paginate from 'mongoose-paginate-v2'
import { iAttendance } from "../interface/iAttendance";

const AttendanceSchema = new Schema<iAttendance>({
    employeeId: { type: Schema.Types.ObjectId, ref: "employees" },
    attendanceDate: Date,
    remark: String,
    morningShift: {
        name: { type: String, default: "Morning" },
        reason: { type: String, default: "" },
        attendance: { type: String, default: "" },
        fine: { type: Number, default: 0 },
        late: { type: String, default: "" },
        checkIn: { type: String, default: "" },
        checkOut: { type: String, default: "" }
    },
    afternoonShift: {
        name: { type: String, default: "Afternoon" },
        reason: { type: String, default: "" },
        attendance: { type: String, default: "" },
        fine: { type: Number, default: 0 },
        late: { type: String, default: "" },
        checkIn: { type: String, default: "" },
        checkOut: { type: String, default: "" }
    },
    createdAt: { type: Date, default: Date.now }
})

AttendanceSchema.plugin(paginate);


const Attendance = model<iAttendance, mongoose.PaginateModel<iAttendance>>('attendances', AttendanceSchema);

export default Attendance