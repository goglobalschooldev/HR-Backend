"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose_paginate_v2_1 = __importDefault(require("mongoose-paginate-v2"));
const AttendanceSchema = new mongoose_1.Schema({
    employeeId: { type: mongoose_1.Schema.Types.ObjectId, ref: "employees" },
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
});
AttendanceSchema.plugin(mongoose_paginate_v2_1.default);
const Attendance = (0, mongoose_1.model)('attendances', AttendanceSchema);
exports.default = Attendance;
