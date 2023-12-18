import mongoose, { Schema, model } from "mongoose";
import paginate from 'mongoose-paginate-v2';
import { iAffair, iBranch, iOffice, iPosition, iPublicHoliday, iSection, iWrokingTime } from "../interface/iBranch"

const BranchSchema = new Schema<iBranch>({
    branchName: String,
    longitude: String,
    latitude: String,
    createdAt: { type: Date, default: Date.now }
})

const AffairSchema = new Schema<iAffair>({
    _id: Schema.Types.ObjectId,
    affairName: String,
    createdAt: { type: Date, default: Date.now }
})

const OfficeSchema = new Schema<iOffice>({
    _id: Schema.Types.ObjectId,
    officeName: String,
    createdAt: { type: Date, default: Date.now }
})
const sectionSchema = new Schema<iSection>({
    _id: Schema.Types.ObjectId,
    sectionName: String,
    createdAt: { type: Date, default: Date.now }
})

const positionSchema = new Schema<iPosition>({
    _id: Schema.Types.ObjectId,
    position: String,
    createdAt: { type: Date, default: Date.now }
})

const wrokingTimeSchema = new Schema<iWrokingTime>({
    employeeId: { type: Schema.Types.ObjectId, ref: "employees" },
    shiftName: String,
    start: String,
    end: String,
    createdAt: { type: Date, default: Date.now }
})


const publicHolidaySchema = new Schema<iPublicHoliday>({
    publicHoliday: String,
    remark: String,
    createdAt: { type: Date, default: Date.now }
})

BranchSchema.plugin(paginate);
AffairSchema.plugin(paginate);
OfficeSchema.plugin(paginate);
sectionSchema.plugin(paginate);
positionSchema.plugin(paginate);
wrokingTimeSchema.plugin(paginate);
publicHolidaySchema.plugin(paginate);

const Branch = model<iBranch, mongoose.PaginateModel<iBranch>>('branchs', BranchSchema);
const Affair = model<iAffair, mongoose.PaginateModel<iAffair>>('affairs', AffairSchema);
const Office = model<iOffice, mongoose.PaginateModel<iOffice>>('offices', OfficeSchema);
const Section = model<iSection, mongoose.PaginateModel<iSection>>('sections', sectionSchema);
const Position = model<iPosition, mongoose.PaginateModel<iPosition>>('positions', positionSchema);
const WrokingTime = model<iWrokingTime, mongoose.PaginateModel<iWrokingTime>>('workingTimes', wrokingTimeSchema);
const PublicHoliday = model<iPublicHoliday, mongoose.PaginateModel<iPublicHoliday>>('publicHolidays', publicHolidaySchema);

export { Branch, Affair, Office, Section, Position, WrokingTime, PublicHoliday };