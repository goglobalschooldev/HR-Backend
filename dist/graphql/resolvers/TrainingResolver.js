"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const paginationLabel_1 = require("../../fn/paginationLabel");
const Training_1 = require("../../models/Training");
const trainingResolver = {
    Query: {
        getTrainingwithPagination: async (_root, { page, limit, keyword, status }) => {
            try {
                const options = {
                    page: page || 1,
                    limit: limit || 10,
                    pagination: true,
                    customLabels: paginationLabel_1.paginationLabel,
                    sort: {
                        createdAt: -1,
                    },
                };
                const statusQuery = status === "All" ? {} : { status };
                const query = {
                    $and: [
                        { topic: { $regex: keyword, $options: "i" } },
                        statusQuery
                    ]
                };
                const Trainings = await Training_1.Training.paginate(query, options);
                return Trainings;
            }
            catch (error) {
                return error;
            }
        },
        getTrainingById: async (_root, { _id }) => {
            try {
                const data = await Training_1.Training.findById(_id);
                return data;
            }
            catch (error) {
                return error;
            }
        },
        getGuestRegisterwithPagination: async (_root, { page, limit, keyword, trainingId, evaluation }) => {
            try {
                const options = {
                    page: page || 1,
                    limit: limit || 10,
                    pagination: true,
                    customLabels: paginationLabel_1.paginationLabel,
                    sort: {
                        createdAt: -1,
                    },
                };
                const evaluationQury = evaluation ? { valuation: { $exists: true, $not: { $size: 0 } } } : {};
                const query = {
                    $and: [
                        {
                            $or: [
                                {
                                    $expr: {
                                        $regexMatch: {
                                            input: { $concat: ['$firstName', ' ', '$lastName'] },
                                            regex: keyword,
                                            options: 'i',
                                        }
                                    }
                                }
                            ]
                        },
                        { trainingId: new mongoose_1.default.Types.ObjectId(trainingId) },
                        evaluationQury
                    ]
                };
                const Trainings = await Training_1.TrainingGuest.paginate(query, options);
                const getEvas = await Training_1.TrainingGuest.find({ trainingId: new mongoose_1.default.Types.ObjectId(trainingId) });
                const getHasEval = await Training_1.TrainingGuest.find({
                    $and: [
                        { trainingId: new mongoose_1.default.Types.ObjectId(trainingId) },
                        evaluationQury
                    ]
                });
                const getFeale = getEvas.filter((female) => female.gender != "Male");
                return {
                    data: Trainings.data,
                    total: getEvas.length,
                    female: getFeale.length,
                    evaluation: getHasEval.length,
                    paginator: Trainings.paginator
                };
            }
            catch (error) {
                return error;
            }
        },
        getEvaluationTrainingByGuest: async (_root, { guestId }) => {
            try {
                const getGeust = await Training_1.TrainingGuest.findById(guestId).populate("valuation.questionId");
                const data = getGeust.valuation.map(data => {
                    return {
                        _id: data.questionId._id,
                        question: data.questionId.question,
                        type: data.questionId.type,
                        anwser: data.answer
                    };
                });
                return data;
            }
            catch (error) {
                return error;
            }
        },
        getQuestions: async (_root, { keyword, type }) => {
            try {
                const typeQuery = type === "All" ? {} : { type };
                const getQuestions = await Training_1.Question.find({
                    $and: [
                        { question: { $regex: keyword, $options: "i" } },
                        typeQuery
                    ]
                });
                return getQuestions;
            }
            catch (error) {
                return error;
            }
        },
        getQuestionsByTraining: async (_root, { trainingId }) => {
            try {
                const getTrainging = await Training_1.Training.findById(trainingId).populate("questions");
                if (getTrainging)
                    return getTrainging.questions;
            }
            catch (error) {
                return error;
            }
        }
    },
    Mutation: {
        createTraining: async (_root, { input }) => {
            try {
                const add = await new Training_1.Training(input).save();
                if (add) {
                    return {
                        message: "Success!",
                        status: true
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
        updateTraining: async (_root, { _id, input }) => {
            try {
                const upd = await Training_1.Training.findByIdAndUpdate(_id, input);
                if (upd) {
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
        updateTrainingStatus: async (_root, { _id, status }) => {
            try {
                const upd = await Training_1.Training.findByIdAndUpdate(_id, { status });
                if (upd) {
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
        deleteTraining: async (_root, { _id }) => {
            try {
                const dls = await Training_1.Training.findByIdAndDelete(_id);
                if (dls) {
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
        guestRegister: async (_root, { input }) => {
            try {
                if (!input.email) {
                    return {
                        message: "Email is require!",
                        status: false
                    };
                }
                const getTrainging = await Training_1.Training.findById(input.trainingId);
                if (!getTrainging) {
                    return {
                        message: "Cannot find Trainging!",
                        status: false
                    };
                }
                if (getTrainging.status != "Not Yet Started") {
                    return {
                        message: "Registration has been closed!",
                        status: false
                    };
                }
                const checkIsDuplication = await Training_1.TrainingGuest.findOne({ email: input.email, trainingId: new mongoose_1.default.Types.ObjectId(input.trainingId) });
                if (checkIsDuplication) {
                    return {
                        message: "Registration Sccessful!",
                        status: true
                    };
                }
                const Register = await new Training_1.TrainingGuest(input).save();
                if (Register) {
                    return {
                        message: "Success!",
                        status: true
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
        updateGuestRegister: async (_root, { input }) => {
            try {
                const Register = await Training_1.TrainingGuest.findByIdAndUpdate({ email: input.email }, input);
                if (Register) {
                    return {
                        message: "Success!",
                        status: true
                    };
                }
                else {
                    return {
                        message: "Please make sure your email is correct!",
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
        deleteGuestRegister: async (_root, { _id }) => {
            try {
                const Register = await Training_1.TrainingGuest.findByIdAndDelete(_id);
                if (Register) {
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
        guestValuation: async (_root, { email, trainingId, input }) => {
            try {
                const getGeust = await Training_1.TrainingGuest.findOne({ trainingId, email });
                if (!getGeust) {
                    return {
                        message: `Make sure this email ${email} is used for the register last time!`,
                        return: false
                    };
                }
                const getTrainging = await Training_1.Training.findById(trainingId);
                if (!getTrainging) {
                    return {
                        message: "Cannot find Trainging!",
                        status: false
                    };
                }
                if (getTrainging.status != "Completed") {
                    return {
                        message: "The Evaluation is not yet allowed!",
                        status: false
                    };
                }
                const Register = await Training_1.TrainingGuest.findOneAndUpdate({
                    trainingId, email
                }, { valuation: input });
                if (Register) {
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
        guestValuationLoing: async (_root, { email, trainingId }) => {
            try {
                const getGeust = await Training_1.TrainingGuest.findOne({ trainingId, email });
                if (!getGeust) {
                    return {
                        message: `Make sure this email ${email} is used for the register last time!`,
                        return: false
                    };
                }
                const getTrainging = await Training_1.Training.findById(trainingId);
                if (!getTrainging) {
                    return {
                        message: "Cannot find Trainging!",
                        status: false
                    };
                }
                if (getTrainging.status != "Completed") {
                    return {
                        message: "The Evaluation is not yet allowed!",
                        status: false
                    };
                }
                return {
                    message: "Success!",
                    status: true
                };
            }
            catch (error) {
                return {
                    message: error.message,
                    status: false
                };
            }
        },
        checkGuestAttendance: async (_root, { guestId, status }) => {
            try {
                const Register = await Training_1.TrainingGuest.findByIdAndUpdate(guestId, { status });
                if (Register) {
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
        createQuestion: async (_root, { question, type, multiple }) => {
            try {
                const add = await new Training_1.Question({ question, type, multiple }).save();
                if (add) {
                    return {
                        message: "Success!",
                        status: true
                    };
                }
            }
            catch (error) {
                return error;
            }
        },
        updateQuestion: async (_root, { _id, question, type, multiple }) => {
            try {
                const upd = await Training_1.Question.findByIdAndUpdate(_id, { question, type, multiple });
                if (upd) {
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
        deleteQuestion: async (_root, { _id }) => {
            try {
                const chekcInUse = Training_1.Training.find({ questions: _id });
                if (chekcInUse.length > 0) {
                    return {
                        message: "The Question is in use!",
                        status: false
                    };
                }
                const dls = await Training_1.Question.findByIdAndDelete(_id);
                if (dls) {
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
        addTrainingQuestion: async (_root, { trainingId, questions }) => {
            try {
                const getTraining = await Training_1.Training.findByIdAndUpdate(trainingId, { questions });
                if (getTraining) {
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
                return error;
            }
        }
    }
};
exports.default = trainingResolver;
