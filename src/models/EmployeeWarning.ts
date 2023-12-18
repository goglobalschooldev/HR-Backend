import mongoose, { Schema, model } from "mongoose"
import paginate from 'mongoose-paginate-v2'
import { iEmployeeWarning } from "../interface/iEmployee"

const EmployeeSchema = new Schema<iEmployeeWarning>({
    employeeId: { type: Schema.Types.ObjectId, ref: "employees" },
    date: Date,
    description: String,
    resolution: String,
    result: String,
    remark: String,
    createdAt: { type: Date, default: Date.now }
})

EmployeeSchema.plugin(paginate);

const EmployeeWarning = model<iEmployeeWarning, mongoose.PaginateModel<iEmployeeWarning>>('employeeWarnings', EmployeeSchema);

export default EmployeeWarning