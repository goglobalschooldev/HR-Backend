"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MessageRespone_1 = __importDefault(require("../../fn/MessageRespone"));
const EmployeeWarning_1 = __importDefault(require("../../models/EmployeeWarning"));
const EmployeeWarningResolver = {
    Query: {
        getEmployeeWarning: async (_root, { employeeId }) => {
            try {
                const data = await EmployeeWarning_1.default.find({ employeeId });
                return data;
            }
            catch (error) {
                return error;
            }
        }
    },
    Mutation: {
        createEmployeeWarning: async (_root, { input }) => {
            try {
                const add = await new EmployeeWarning_1.default(input).save();
                if (add) {
                    return (0, MessageRespone_1.default)(true);
                }
            }
            catch (error) {
                return error;
            }
        },
        updateEmployeeWarning: async (_root, { _id, input }) => {
            try {
                const add = await EmployeeWarning_1.default.findByIdAndUpdate(_id, input);
                if (add) {
                    return (0, MessageRespone_1.default)(true);
                }
                else {
                    return (0, MessageRespone_1.default)(false);
                }
            }
            catch (error) {
                return error;
            }
        },
        deleteEmployeeWarning: async (_root, { _id }) => {
            try {
                const add = await EmployeeWarning_1.default.findByIdAndDelete(_id);
                if (add) {
                    return (0, MessageRespone_1.default)(true);
                }
                else {
                    return (0, MessageRespone_1.default)(false);
                }
            }
            catch (error) {
                return error;
            }
        },
    }
};
exports.default = EmployeeWarningResolver;
