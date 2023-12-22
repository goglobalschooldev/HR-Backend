import mongoose, { Schema, model } from "mongoose"
import paginate from 'mongoose-paginate-v2'
import { iEmployee } from "../interface/iEmployee"

const EmployeeSchema = new Schema<iEmployee>({
    _id: Schema.Types.ObjectId,
    nationalId: String,
    employeeId: String,
    firstName: String,
    lastName: String,
    latinName: String,
    gender: String,
    profileImage: String,
    joinDate: { type: Date },
    dob: { type: Date },
    placeOfBirth: String,
    nationality: String,
    tell: String,
    type: String,
    email: String,
    currentAddress: String,
    idCard: Schema.Types.ObjectId,
    branch: { type: Schema.Types.ObjectId, ref: "branchs" },
    workingStatus: { type: String, enum: ["working", "resign", "suspend"], default: "working" },
    marital: String,
    workBook: Boolean,
    role: {
        type: String,
        // enum: ["superAdmin", "admin", "head", "employee"], default: "employee" 
    },
    createdAt: { type: Date, default: Date.now }
})

EmployeeSchema.plugin(paginate);


const Employee = model<iEmployee, mongoose.PaginateModel<iEmployee>>('employees', EmployeeSchema);

export default Employee