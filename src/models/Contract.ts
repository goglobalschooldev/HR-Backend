import mongoose, { Schema, model } from "mongoose"
import paginate from 'mongoose-paginate-v2'
import { iContract, iContractType } from "../interface/iContract"

const ContactTypeSchema = new Schema<iContractType>({
    _id: Schema.Types.ObjectId,
    title: String,
    createdAt: { type: Date, default: Date.now }
})

const ContactSchema = new Schema<iContract>({
    employeeId: { type: Schema.Types.ObjectId, ref: "employees" },
    contractTitle: { type: Schema.Types.ObjectId, ref: "contractTypes" },
    position: { type: Schema.Types.ObjectId, ref: "positions" },
    affair: { type: Schema.Types.ObjectId, ref: "affairs" },
    office: { type: Schema.Types.ObjectId, ref: "offices" },
    section: { type: Schema.Types.ObjectId, ref: "sections" },
    workingTime: [{ type: Schema.Types.ObjectId, ref: "workingTimes" }],
    startDate: Date,
    endDate: Date,
    status: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
})

ContactSchema.plugin(paginate);
ContactTypeSchema.plugin(paginate);


const ContactType = model<iContractType, mongoose.PaginateModel<iContractType>>('contractTypes', ContactTypeSchema);
const Contract = model<iContract, mongoose.PaginateModel<iContract>>('contracts', ContactSchema);


export { ContactType, Contract };