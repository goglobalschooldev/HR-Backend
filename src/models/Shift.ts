import mongoose, { Schema, model } from "mongoose"
import paginate from 'mongoose-paginate-v2'
import { iShift } from "../interface/iShift";

const shiftSchema = new Schema<iShift>({
    from: Date,
    to: Date,
    shiftOff: String,
    reason: String,
    timeOff: { type: mongoose.Types.ObjectId, ref: 'publicHolidays' },
    requestBy: { type: mongoose.Types.ObjectId, ref: 'employees' },
    approveBy: { type: mongoose.Types.ObjectId, ref: 'employees' },
    approveStatus: { type: String ,default:"pending"},
    cancelBy: { type: mongoose.Types.ObjectId, ref: 'employees' },
    hrComment: String,
    requestAt: String,
    createdAt: { type: Date, default: Date.now }
})

shiftSchema.plugin(paginate);

const Shift = model<iShift, mongoose.PaginateModel<iShift>>('shifts', shiftSchema);

export default Shift;