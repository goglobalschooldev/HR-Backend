"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Employee_1 = __importDefault(require("../../models/Employee"));
const currentDate_1 = require("../../fn/currentDate");
const employees_json_1 = __importDefault(require("../../db/employees.json"));
const generate = {
    Query: {
        generateData: async (_root) => {
            try {
                employees_json_1.default.map(async (emp) => {
                    const dob = (0, currentDate_1.currentDate)(emp?.date_of_birth);
                    await Employee_1.default.findByIdAndUpdate(emp?._id?.$oid, {
                        dob: new Date(dob)
                    });
                });
            }
            catch (error) {
                return error;
            }
        }
    }
};
exports.default = generate;
