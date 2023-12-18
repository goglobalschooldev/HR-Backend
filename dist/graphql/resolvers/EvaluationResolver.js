"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const AuchCheck_1 = __importDefault(require("../../auth/AuchCheck"));
const MessageRespone_1 = __importDefault(require("../../fn/MessageRespone"));
const currentDate_1 = require("../../fn/currentDate");
const Employee_1 = __importDefault(require("../../models/Employee"));
const Evaluation_1 = require("../../models/Evaluation");
const getPosition_1 = require("../../fn/getPosition");
const EvaluationResolver = {
    Query: {
        getEvaluations: async (_root, { keyword }) => {
            try {
                const getEvaluations = await Evaluation_1.Evaluation.find({
                    title: { $regex: keyword, $options: "i" }
                });
                return getEvaluations;
            }
            catch (error) {
                return error;
            }
        },
        getEvaluationByEmployee: async (_root, { employeeId }) => {
            try {
                const getEvaluations = await Evaluation_1.EmployeeEvaluate.find({
                    employeeId: new mongoose_1.default.Types.ObjectId(employeeId)
                }).populate("evaluationBy commentsBy.user");
                const data = await Promise.all(getEvaluations.map(async (evalua) => {
                    const commentsBy = evalua.commentsBy.map((user) => {
                        return {
                            _id: user._id,
                            text: user.text,
                        };
                    });
                    const av = evalua.evaluations.map((eva) => {
                        const points = eva.value.map((point) => point.point);
                        const sum = points.reduce((accumulator, currentValue) => {
                            return accumulator + currentValue;
                        }, 0);
                        return sum / points.length;
                    });
                    const sumav = av.reduce((accumulator, currentValue) => {
                        return accumulator + currentValue;
                    }, 0);
                    const position = await (0, getPosition_1.getPosition)(evalua?.evaluationBy?._id);
                    const overallAverage = sumav / av.length;
                    let intNumber = Math.floor(overallAverage);
                    const getOverallScore = await Evaluation_1.EvaluationScore.find();
                    const overallScore = getOverallScore.map((ver) => {
                        return {
                            overall: ver?.evaluation,
                            overallStatus: ver?.score === intNumber ? true : false
                        };
                    });
                    return {
                        _id: evalua._id,
                        date: evalua.date,
                        type: evalua.type,
                        employeeId: evalua.employeeId,
                        evaluationBy: evalua?.evaluationBy?.latinName,
                        evaluationBySrc: evalua?.evaluationBy?.profileImage,
                        evaluations: evalua.evaluations,
                        evaluationByPosition: position === undefined ? "No Cotract" : position,
                        commentsBy,
                        overallScore,
                        overallAverage: sumav / av.length
                    };
                }));
                return data;
            }
            catch (error) {
                return error;
            }
        },
        getEvaluationScore: async (_root) => {
            try {
                const data = await Evaluation_1.EvaluationScore.find();
                return data;
            }
            catch (error) {
                return error;
            }
        }
    },
    Mutation: {
        createEvaluation: async (_root, { title, evaluations }) => {
            try {
                const add = await new Evaluation_1.Evaluation({ title, evaluations }).save();
                if (add) {
                    return (0, MessageRespone_1.default)(true);
                }
            }
            catch (error) {
                return error;
            }
        },
        updateEvaluation: async (_root, { _id, title, evaluations }) => {
            try {
                const upd = await Evaluation_1.Evaluation.findByIdAndUpdate(_id, { title, evaluations });
                if (upd) {
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
        deleteEvaluation: async (_root, { _id }) => {
            try {
                const dls = await Evaluation_1.Evaluation.findByIdAndDelete(_id);
                if (dls) {
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
        employeeEvaluation: async (_root, { input }, { req }) => {
            try {
                const auchCheck = await (0, AuchCheck_1.default)(req);
                if (!auchCheck.status) {
                    return new Error(auchCheck.message);
                }
                const Evaluation = await new Evaluation_1.EmployeeEvaluate({
                    date: (0, currentDate_1.currentDate)(),
                    evaluationBy: auchCheck?.user?.user_id?.toString(),
                    ...input
                }).save();
                if (Evaluation)
                    return (0, MessageRespone_1.default)(true);
            }
            catch (error) {
                return error;
            }
        },
        editEmployeeEvaluation: async (_root, { _id, input }, { req }) => {
            try {
                const auchCheck = await (0, AuchCheck_1.default)(req);
                if (!auchCheck.status) {
                    return new Error(auchCheck.message);
                }
                const getEmployee = await Employee_1.default.findById(auchCheck.user.user_id.toString());
                if (getEmployee?.role != "superAdmin") {
                    return {
                        status: false,
                        message: "You do not have the permissions."
                    };
                }
                const Evaluation = await Evaluation_1.EmployeeEvaluate.findByIdAndUpdate(_id, input);
                if (Evaluation) {
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
        deleteEmployeeEvaluation: async (_root, { _id, }, { req }) => {
            try {
                const auchCheck = await (0, AuchCheck_1.default)(req);
                if (!auchCheck.status) {
                    return new Error(auchCheck.message);
                }
                const getEmployee = await Employee_1.default.findById(auchCheck.user.user_id.toString());
                if (getEmployee.role != "superAdmin") {
                    return {
                        status: false,
                        message: "You do not have the permissions."
                    };
                }
                const Evaluation = await Evaluation_1.EmployeeEvaluate.findByIdAndDelete(_id);
                if (Evaluation) {
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
        headCommentEvaluation: async (_root, { _id, text }, { req }) => {
            try {
                const auchCheck = await (0, AuchCheck_1.default)(req);
                if (!auchCheck.status) {
                    return new Error(auchCheck.message);
                }
                const Evaluation = await Evaluation_1.EmployeeEvaluate.findByIdAndUpdate(_id, { $push: { commentsBy: { text, user: auchCheck?.user?.user_id?.toString() } } });
                if (Evaluation) {
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
        removeHeadCommentEvaluation: async (_root, { _id, commentId }, { req }) => {
            try {
                const auchCheck = await (0, AuchCheck_1.default)(req);
                if (!auchCheck.status) {
                    return new Error(auchCheck.message);
                }
                const getEmployee = await Employee_1.default.findById(auchCheck?.user?.user_id.toString());
                if (getEmployee.role != "superAdmin") {
                    return {
                        status: false,
                        message: "You do not have the permissions."
                    };
                }
                const Evaluation = await Evaluation_1.EmployeeEvaluate.findByIdAndUpdate(_id, {
                    $pull: {
                        commentsBy: { _id: commentId }
                    }
                });
                if (Evaluation) {
                    return {
                        message: "Success!",
                        status: true
                    };
                }
                else {
                    return {
                        message: "Fail!",
                        status: false
                    };
                }
            }
            catch (error) {
                return {
                    message: error.message,
                    status: false
                };
            }
        },
        createEvaluationScore: async (_root, { evaluation, score }) => {
            try {
                const addd = await new Evaluation_1.EvaluationScore({ evaluation, score }).save();
                if (addd) {
                    return (0, MessageRespone_1.default)(true);
                }
            }
            catch (error) {
                return error;
            }
        },
        updateEvaluationScore: async (_root, { _id, evaluation, score }) => {
            try {
                const update = await Evaluation_1.EvaluationScore.findByIdAndUpdate(_id, { evaluation, score });
                if (update) {
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
        deleteEvaluationScore: async (_root, { _id }) => {
            try {
                const del = await Evaluation_1.EvaluationScore.findByIdAndDelete(_id);
                if (del) {
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
exports.default = EvaluationResolver;
