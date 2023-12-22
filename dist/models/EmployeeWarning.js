"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose_paginate_v2_1 = __importDefault(require("mongoose-paginate-v2"));
const EmployeeSchema = new mongoose_1.Schema({
    employeeId: { type: mongoose_1.Schema.Types.ObjectId, ref: "employees" },
    date: Date,
    description: String,
    resolution: String,
    result: String,
    remark: String,
    createdAt: { type: Date, default: Date.now }
});
EmployeeSchema.plugin(mongoose_paginate_v2_1.default);
const EmployeeWarning = (0, mongoose_1.model)('employeeWarnings', EmployeeSchema);
exports.default = EmployeeWarning;
