"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Training_1 = require("../../models/Training");
const trainingResolver = {
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
    }
};
exports.default = trainingResolver;
