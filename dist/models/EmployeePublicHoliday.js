"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose_paginate_v2_1 = __importDefault(require("mongoose-paginate-v2"));
const EmployeeSchema = new mongoose_1.Schema({
    employeeId: { type: mongoose_1.Schema.Types.ObjectId, ref: "employees" },
    title: { type: mongoose_1.Schema.Types.ObjectId, ref: "publicHolidays" },
    totalDay: { type: Number, default: 0 },
    year: String,
    status: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now }
});
EmployeeSchema.plugin(mongoose_paginate_v2_1.default);
const EmployeePublicHoliday = (0, mongoose_1.model)('employeePublicHolidays', EmployeeSchema);
exports.default = EmployeePublicHoliday;
