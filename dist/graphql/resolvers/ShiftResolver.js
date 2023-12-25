"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Shift_1 = __importDefault(require("../../models/Shift"));
const AuchCheck_1 = __importDefault(require("../../auth/AuchCheck"));
const MessageRespone_1 = __importDefault(require("../../fn/MessageRespone"));
const EmployeePublicHoliday_1 = __importDefault(require("../../models/EmployeePublicHoliday"));
const currentDate_1 = require("../../fn/currentDate");
const LeaveRecordAtt_1 = __importDefault(require("../../fn/LeaveRecordAtt"));
const paginationLabel_1 = require("../../fn/paginationLabel");
const Employee_1 = __importDefault(require("../../models/Employee"));
const mongoose_1 = __importDefault(require("mongoose"));
const Notification_1 = __importDefault(require("../../models/Notification"));
const expoNotificationSender_1 = require("../../fn/expoNotificationSender");
const ShiftResolver = {
    Query: {
        getTimeOffsForMobile: async (_root, {}, { req }) => {
            try {
                const auchCheck = await (0, AuchCheck_1.default)(req);
                if (!auchCheck.status) {
                    return new Error(auchCheck.message);
                }
                const currentDate = new Date();
                const currentYear = currentDate.getFullYear();
                const getPH = await EmployeePublicHoliday_1.default.find({ employeeId: auchCheck?.user?.user_id, year: currentYear.toString() }).populate("title");
                const data = getPH.map((ph) => {
                    return {
                        _id: ph?._id,
                        timeOff: ph?.title?.publicHoliday
                    };
                });
                return data;
            }
            catch (error) {
                return error;
            }
        },
        getShiftsPagination: async (_root, { page, limit, keyword, shiftStatus, from, to, branchId }) => {
            try {
                const options = {
                    page: page || 1,
                    limit: limit || 10,
                    customLabels: paginationLabel_1.paginationLabel,
                    pagination: true,
                    populate: "timeOff requestBy cancelBy approveBy",
                    sort: { createdAt: -1 }
                };
                const fromQuery = from.length === 0 ? {} : {
                    from: { $gte: new Date(from) }
                };
                const toQuery = to.length === 0 ? {} : {
                    to: { $lte: new Date(to) }
                };
                const branchIdQuery = branchId === "All" ? {} : { branch: new mongoose_1.default.Types.ObjectId(branchId) };
                const getEmployees = await Employee_1.default.find({
                    $and: [
                        branchIdQuery,
                        { latinName: { $regex: keyword, $options: "i" } }
                    ]
                });
                const employeeIds = getEmployees.map(emp => emp?._id?.toString());
                const query = {
                    $and: [
                        { approveStatus: shiftStatus },
                        fromQuery,
                        toQuery,
                        { requestBy: { $in: employeeIds } },
                    ]
                };
                const getShift = await Shift_1.default.paginate(query, options);
                const data = getShift?.data?.map((data) => {
                    return {
                        _id: data?._id,
                        from: data?.from,
                        to: data?.to,
                        reason: data?.reason,
                        timeOff: data?.shiftOff,
                        requestBy: data?.requestBy?.latinName,
                        approveBy: data?.approveBy?.latinName,
                        cancelBy: data?.cancelBy?.latinName,
                        requestByProfile: data?.requestBy?.profileImage,
                        approveByProfile: data?.approveBy?.profileImage,
                        cancelByProfile: data?.cancelBy?.profileImage,
                        hrComment: data?.hrComment,
                        requestAt: data?.requestAt
                    };
                });
                return {
                    data,
                    paginator: getShift.paginator
                };
            }
            catch (error) {
                return error;
            }
        }
    },
    Mutation: {
        requestLeave: async (_root, { input }, { req }) => {
            try {
                const auchCheck = await (0, AuchCheck_1.default)(req);
                if (!auchCheck.status) {
                    return new Error(auchCheck.message);
                }
                const addLeave = await new Shift_1.default({
                    from: input?.from,
                    to: input?.to,
                    shiftOff: input?.shiftOff,
                    reason: input?.reason,
                    timeOff: input?.timeOff,
                    requestAt: (0, currentDate_1.currentTime)(),
                    requestBy: auchCheck?.user?.user_id,
                }).save();
                if (addLeave) {
                    return (0, MessageRespone_1.default)(true);
                }
            }
            catch (error) {
                return error;
            }
        },
        cancelLeave: async (_root, { leaveID, hrComment }, { req }) => {
            try {
                const auchCheck = await (0, AuchCheck_1.default)(req);
                if (!auchCheck.status) {
                    return new Error(auchCheck.message);
                }
                const updateLeave = await Shift_1.default.findByIdAndUpdate(leaveID, {
                    approveStatus: "cancel",
                    cancelBy: auchCheck?.user?.user_id,
                    hrComment
                });
                if (updateLeave) {
                    (0, expoNotificationSender_1.expoNotificationSender)([updateLeave?.requestBy?.toString()], "Leave Cancel", hrComment, updateLeave._id.toString(), "leave");
                    await new Notification_1.default({
                        type: "leave",
                        forUser: [updateLeave?.requestBy?.toString()],
                        navigetId: updateLeave?._id,
                        title: "Leave Cancel",
                        body: hrComment,
                        date: new Date((0, currentDate_1.currentDate)()),
                        time: (0, currentDate_1.currentTime)(),
                    }).save();
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
        approveLeave: async (_root, { leaveID, hrComment }, { req }) => {
            try {
                const auchCheck = await (0, AuchCheck_1.default)(req);
                if (!auchCheck.status) {
                    return new Error(auchCheck.message);
                }
                const updateLeave = await Shift_1.default.findByIdAndUpdate(leaveID, {
                    approveStatus: "approve",
                    approveBy: auchCheck?.user?.user_id,
                    hrComment
                });
                if (updateLeave) {
                    (0, expoNotificationSender_1.expoNotificationSender)([updateLeave?.requestBy?.toString()], "Leave Approved", hrComment, updateLeave._id.toString(), "leave");
                    await new Notification_1.default({
                        type: "leave",
                        forUser: [updateLeave?.requestBy?.toString()],
                        navigetId: updateLeave?._id,
                        title: "Leave Approved",
                        body: hrComment,
                        date: new Date((0, currentDate_1.currentDate)()),
                        time: (0, currentDate_1.currentTime)(),
                    }).save();
                    if (updateLeave?.shiftOff === "AllDay") {
                        for (var date = new Date(updateLeave?.from); date <= new Date(updateLeave?.to); date.setDate(date.getDate() + 1)) {
                            (0, LeaveRecordAtt_1.default)(date, updateLeave?.requestBy?.toString(), updateLeave?.shiftOff, updateLeave?.reason);
                        }
                    }
                    if (updateLeave?.shiftOff === "Morning") {
                        (0, LeaveRecordAtt_1.default)(updateLeave?.from, updateLeave?.requestBy?.toString(), updateLeave?.shiftOff, updateLeave?.reason);
                    }
                    if (updateLeave?.shiftOff === "Afternoon") {
                        (0, LeaveRecordAtt_1.default)(updateLeave?.from, updateLeave?.requestBy?.toString(), updateLeave?.shiftOff, updateLeave?.reason);
                    }
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
exports.default = ShiftResolver;
