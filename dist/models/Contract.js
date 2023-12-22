"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contract = exports.ContactType = void 0;
const mongoose_1 = require("mongoose");
const mongoose_paginate_v2_1 = __importDefault(require("mongoose-paginate-v2"));
const ContactTypeSchema = new mongoose_1.Schema({
    _id: mongoose_1.Schema.Types.ObjectId,
    title: String,
    createdAt: { type: Date, default: Date.now }
});
const ContactSchema = new mongoose_1.Schema({
    employeeId: { type: mongoose_1.Schema.Types.ObjectId, ref: "employees" },
    contractTitle: { type: mongoose_1.Schema.Types.ObjectId, ref: "contractTypes" },
    position: { type: mongoose_1.Schema.Types.ObjectId, ref: "positions" },
    affair: { type: mongoose_1.Schema.Types.ObjectId, ref: "affairs" },
    office: { type: mongoose_1.Schema.Types.ObjectId, ref: "offices" },
    section: { type: mongoose_1.Schema.Types.ObjectId, ref: "sections" },
    workingTime: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "workingTimes" }],
    startDate: Date,
    endDate: Date,
    status: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
});
ContactSchema.plugin(mongoose_paginate_v2_1.default);
ContactTypeSchema.plugin(mongoose_paginate_v2_1.default);
const ContactType = (0, mongoose_1.model)('contractTypes', ContactTypeSchema);
exports.ContactType = ContactType;
const Contract = (0, mongoose_1.model)('contracts', ContactSchema);
exports.Contract = Contract;
