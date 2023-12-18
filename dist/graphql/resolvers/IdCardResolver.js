"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Employee_1 = __importDefault(require("../../models/Employee"));
const MessageRespone_1 = __importDefault(require("../../fn/MessageRespone"));
const Contract_1 = require("../../models/Contract");
const IdCardResolver = {
    Query: {
        getEmployeeIdCard: async (_root, { employeeId }) => {
            try {
                const getEmp = await Employee_1.default.findById(employeeId);
                const getContract = await Contract_1.Contract.findOne({ employeeId: new mongoose_1.default.Types.ObjectId(employeeId), status: false }).populate("position");
                return {
                    profileImage: getEmp?.profileImage,
                    firstName: getEmp?.firstName,
                    lastName: getEmp?.lastName,
                    latinName: getEmp?.latinName,
                    position: getContract?.position?.position,
                    QRCode: getEmp?.idCard,
                };
            }
            catch (error) {
                return error;
            }
        }
    },
    Mutation: {
        generateEmployeeQRCode: async (_root, { employeeId }) => {
            try {
                const newQr = new mongoose_1.default.Types.ObjectId();
                const getEmp = await Employee_1.default.findByIdAndUpdate(employeeId, { idCard: newQr });
                if (getEmp) {
                    return (0, MessageRespone_1.default)(true);
                }
                else {
                    return (0, MessageRespone_1.default)(false);
                }
            }
            catch (error) {
                return error;
            }
        }
    }
};
exports.default = IdCardResolver;
