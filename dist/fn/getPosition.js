"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPosition = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Contract_1 = require("../models/Contract");
const getPosition = async (employeeId) => {
    try {
        const getContract = await Contract_1.Contract.findOne({ employeeId: new mongoose_1.default.Types.ObjectId(employeeId), status: true }).populate("position");
        return getContract?.position?.position;
    }
    catch (error) {
        return error;
    }
};
exports.getPosition = getPosition;
