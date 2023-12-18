"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose_paginate_v2_1 = __importDefault(require("mongoose-paginate-v2"));
const EmployeeSchema = new mongoose_1.Schema({
    _id: mongoose_1.Schema.Types.ObjectId,
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
    email: String,
    currentAddress: String,
    idCard: mongoose_1.Schema.Types.ObjectId,
    branch: { type: mongoose_1.Schema.Types.ObjectId, ref: "branchs" },
    workingStatus: { type: String, enum: ["working", "resign", "suspend"], default: "working" },
    marital: String,
    workBook: Boolean,
    role: {
        type: String,
    },
    createdAt: { type: Date, default: Date.now }
});
EmployeeSchema.plugin(mongoose_paginate_v2_1.default);
const Employee = (0, mongoose_1.model)('employees', EmployeeSchema);
exports.default = Employee;
