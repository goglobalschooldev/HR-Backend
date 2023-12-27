"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const currentDate_1 = require("../../fn/currentDate");
const Attendance_1 = __importDefault(require("../../models/Attendance"));
const removeDuplicates_1 = __importDefault(require("../../fn/removeDuplicates"));
const moment_1 = __importDefault(require("moment"));
const generate = {
    Query: {
        generateData: async (_root) => {
            try {
                const empId = new mongoose_1.default.Types.ObjectId("634f9fee28216566b49361f2");
                const getAttmorningShift = await Attendance_1.default.aggregate([
                    { $match: { employeeId: empId } },
                    { $match: { "morningShift.attendance": "Permission" } },
                ]);
                const getAttafternoonShift = await Attendance_1.default.aggregate([
                    { $match: { employeeId: empId } },
                    { $match: { "afternoonShift.attendance": "Permission" } },
                ]);
                const getAttmorningShiftId = getAttmorningShift.map(da => da._id.toString());
                const getAttafternoonShiftId = getAttafternoonShift.map(da => da._id.toString());
                const totalID = [...getAttafternoonShiftId, ...getAttmorningShiftId];
                const reDuplicates = (0, removeDuplicates_1.default)(totalID);
                const data = await Promise.all(reDuplicates.map(async (permision) => {
                    const getAtt = await Attendance_1.default.findById(permision);
                    let attendanceDate = (0, moment_1.default)(getAtt?.attendanceDate).format('MMM');
                    return attendanceDate;
                }));
                console.log(data.sort());
                console.log(data.length / 2);
                await new Attendance_1.default({
                    attendanceDate: (0, currentDate_1.currentDate)(new Date("2023-02-27")),
                    employeeId: empId,
                    afternoonShift: {
                        reason: "Update System",
                        attendance: "Permission",
                    },
                }).save();
            }
            catch (error) {
                return error;
            }
        }
    }
};
exports.default = generate;
