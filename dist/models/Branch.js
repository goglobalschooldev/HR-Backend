"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicHoliday = exports.WrokingTime = exports.Position = exports.Section = exports.Office = exports.Affair = exports.Branch = void 0;
const mongoose_1 = require("mongoose");
const mongoose_paginate_v2_1 = __importDefault(require("mongoose-paginate-v2"));
const BranchSchema = new mongoose_1.Schema({
    branchName: String,
    longitude: String,
    latitude: String,
    createdAt: { type: Date, default: Date.now }
});
const AffairSchema = new mongoose_1.Schema({
    _id: mongoose_1.Schema.Types.ObjectId,
    affairName: String,
    createdAt: { type: Date, default: Date.now }
});
const OfficeSchema = new mongoose_1.Schema({
    _id: mongoose_1.Schema.Types.ObjectId,
    officeName: String,
    createdAt: { type: Date, default: Date.now }
});
const sectionSchema = new mongoose_1.Schema({
    _id: mongoose_1.Schema.Types.ObjectId,
    sectionName: String,
    createdAt: { type: Date, default: Date.now }
});
const positionSchema = new mongoose_1.Schema({
    _id: mongoose_1.Schema.Types.ObjectId,
    position: String,
    createdAt: { type: Date, default: Date.now }
});
const wrokingTimeSchema = new mongoose_1.Schema({
    employeeId: { type: mongoose_1.Schema.Types.ObjectId, ref: "employees" },
    shiftName: String,
    start: String,
    end: String,
    createdAt: { type: Date, default: Date.now }
});
const publicHolidaySchema = new mongoose_1.Schema({
    publicHoliday: String,
    remark: String,
    createdAt: { type: Date, default: Date.now }
});
BranchSchema.plugin(mongoose_paginate_v2_1.default);
AffairSchema.plugin(mongoose_paginate_v2_1.default);
OfficeSchema.plugin(mongoose_paginate_v2_1.default);
sectionSchema.plugin(mongoose_paginate_v2_1.default);
positionSchema.plugin(mongoose_paginate_v2_1.default);
wrokingTimeSchema.plugin(mongoose_paginate_v2_1.default);
publicHolidaySchema.plugin(mongoose_paginate_v2_1.default);
const Branch = (0, mongoose_1.model)('branchs', BranchSchema);
exports.Branch = Branch;
const Affair = (0, mongoose_1.model)('affairs', AffairSchema);
exports.Affair = Affair;
const Office = (0, mongoose_1.model)('offices', OfficeSchema);
exports.Office = Office;
const Section = (0, mongoose_1.model)('sections', sectionSchema);
exports.Section = Section;
const Position = (0, mongoose_1.model)('positions', positionSchema);
exports.Position = Position;
const WrokingTime = (0, mongoose_1.model)('workingTimes', wrokingTimeSchema);
exports.WrokingTime = WrokingTime;
const PublicHoliday = (0, mongoose_1.model)('publicHolidays', publicHolidaySchema);
exports.PublicHoliday = PublicHoliday;
