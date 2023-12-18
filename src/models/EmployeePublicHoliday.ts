import mongoose, { Schema, model } from "mongoose"
import paginate from 'mongoose-paginate-v2'
import { iEmployeePublicHoliday } from "../interface/iEmployee"

const EmployeeSchema = new Schema<iEmployeePublicHoliday>({
    employeeId: { type: Schema.Types.ObjectId, ref: "employees" },
    title: { type: Schema.Types.ObjectId, ref: "publicHolidays" },
    totalDay: { type: Number, default: 0 },
    year: String,
    status: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now }
})

EmployeeSchema.plugin(paginate);

const EmployeePublicHoliday = model<iEmployeePublicHoliday, mongoose.PaginateModel<iEmployeePublicHoliday>>('employeePublicHolidays', EmployeeSchema);

export default EmployeePublicHoliday