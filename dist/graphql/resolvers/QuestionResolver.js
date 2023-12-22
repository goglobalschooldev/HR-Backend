"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Training_1 = require("../../models/Training");
const questionResolver = {
    Query: {
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
                return {
                    message: error.message,
                    status: false
                };
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
    }
};
exports.default = questionResolver;
