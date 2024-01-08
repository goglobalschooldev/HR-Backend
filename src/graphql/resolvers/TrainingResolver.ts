import mongoose from "mongoose";
import { paginationLabel } from "../../fn/paginationLabel";
import { iTraining } from "../../interface/iTraining";
import { Question, Training, TrainingGuest } from "../../models/Training"

const trainingResolver = {
    Query: {
        getTrainingwithPagination: async (_root: undefined, { page, limit, keyword, status }: { page: number, limit: number, keyword: string, status: string }) => {
            try {
                const options = {
                    page: page || 1,
                    limit: limit || 10,
                    pagination: true,
                    customLabels: paginationLabel,
                    sort: {
                        createdAt: -1,
                    },
                    // populate: "type_timeoff request_by approve_by cancel_by"
                };
                const statusQuery = status === "All" ? {} : { status }
                const query = {
                    $and: [
                        { topic: { $regex: keyword, $options: "i" } },
                        statusQuery
                    ]
                };
                const Trainings = await Training.paginate(query, options);
                return Trainings
            } catch (error) {
                return error
            }
        },
        getTrainingById: async (_root: undefined, { _id }: { _id: string, }) => {
            try {
                const data = await Training.findById(_id);
                return data
            } catch (error) {
                return error
            }
        },
        getGuestRegisterwithPagination: async (_root: undefined, { page, limit, keyword, trainingId, evaluation }: { page: number, limit: number, keyword: string, status: string, trainingId: string, evaluation: string }) => {
            try {
                const options = {
                    page: page || 1,
                    limit: limit || 10,
                    pagination: true,
                    customLabels: paginationLabel,
                    sort: {
                        createdAt: -1,
                    },
                };
                const evaluationQury = evaluation ? { valuation: { $exists: true, $not: { $size: 0 } } } : {}
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
                                }]
                        },
                        { trainingId: new mongoose.Types.ObjectId(trainingId) },

                        evaluationQury
                    ]
                };
                const Trainings = await TrainingGuest.paginate(query, options);
                const getEvas = await TrainingGuest.find({ trainingId: new mongoose.Types.ObjectId(trainingId) })
                const getHasEval = await TrainingGuest.find({
                    $and: [
                        { trainingId: new mongoose.Types.ObjectId(trainingId) },
                        evaluationQury
                    ]
                })
                const getFeale = getEvas.filter((female) => female.gender != "Male")
                return {
                    data: Trainings.data,
                    total: getEvas.length,
                    female: getFeale.length,
                    evaluation: getHasEval.length,
                    paginator: Trainings.paginator
                }
            } catch (error) {
                return error
            }
        },
        getEvaluationTrainingByGuest: async (_root: undefined, { guestId }: { guestId: string }) => {
            try {
                const getGeust = await TrainingGuest.findById(guestId).populate("valuation.questionId")
                const data = getGeust.valuation.map(data => {
                    return {
                        _id: data.questionId._id,
                        question: data.questionId.question,
                        type: data.questionId.type,
                        anwser: data.answer
                    }
                })
                return data
            } catch (error) {
                return error
            }
        },
        // Questions ============================================
        getQuestions: async (_root: undefined, { keyword, type }: { keyword: string, type: string }) => {
            try {
                const typeQuery = type === "All" ? {} : { type }
                const getQuestions = await Question.find({
                    $and: [
                        { question: { $regex: keyword, $options: "i" } },
                        typeQuery
                    ]
                })
                return getQuestions
            } catch (error) {
                return error
            }
        },
        getQuestionsByTraining: async (_root: undefined, { trainingId }: { trainingId: string }) => {
            try {
                const getTrainging = await Training.findById(trainingId).populate("questions");
                if (getTrainging)
                    return getTrainging.questions
            } catch (error) {
                return error
            }
        }
    },
    Mutation: {
        createTraining: async (_root: undefined, { input }: { input: iTraining }) => {
            try {
                const add = await new Training(input).save()
                if (add) {
                    return {
                        message: "Success!",
                        status: true
                    }
                }
            } catch (error) {
                return {
                    message: error.message,
                    status: false
                }
            }
        },
        updateTraining: async (_root: undefined, { _id, input }: { _id: string, input: iTraining }) => {
            try {
                const upd = await Training.findByIdAndUpdate(_id, input);
                if (upd) {
                    return {
                        message: "Success!",
                        status: true
                    }
                } else {
                    return {
                        message: "Fail!",
                        status: false
                    }
                }
            } catch (error) {
                return {
                    message: error.message,
                    status: false
                }
            }
        },
        updateTrainingStatus: async (_root: undefined, { _id, status }: { _id: string, status: string }) => {
            try {
                const upd = await Training.findByIdAndUpdate(_id, { status });
                if (upd) {
                    return {
                        message: "Success!",
                        status: true
                    }
                } else {
                    return {
                        message: "Fail!",
                        status: false
                    }
                }
            } catch (error) {
                return {
                    message: error.message,
                    status: false
                }
            }
        },
        deleteTraining: async (_root: undefined, { _id }: { _id: string }) => {
            try {
                const dls = await Training.findByIdAndDelete(_id);
                if (dls) {
                    return {
                        message: "Success!",
                        status: true
                    }
                } else {
                    return {
                        message: "Fail!",
                        status: false
                    }
                }
            } catch (error) {
                return {
                    message: error.message,
                    status: false
                }
            }
        },

        guestRegister: async (_root: undefined, { input }: { input: any }) => {
            try {
                if (!input.email) {
                    return {
                        message: "Email is require!",
                        status: false
                    }
                }
                const getTrainging = await Training.findById(input.trainingId)
                if (!getTrainging) {
                    return {
                        message: "Cannot find Trainging!",
                        status: false
                    }
                }
                if (getTrainging.status != "Not Yet Started") {
                    return {
                        message: "Registration has been closed!",
                        status: false
                    }
                }
                const checkIsDuplication = await TrainingGuest.findOne({ email: input.email, trainingId: new mongoose.Types.ObjectId(input.trainingId) })
                if (checkIsDuplication) {
                    return {
                        message: "Registration Sccessful!",
                        status: true
                    }
                }
                const Register = await new TrainingGuest(input).save()
                if (Register) {
                    return {
                        message: "Success!",
                        status: true
                    }
                }
            } catch (error) {
                return {
                    message: error.message,
                    status: false
                }
            }
        },
        updateGuestRegister: async (_root: undefined, { input }: { input: any }) => {
            try {
                const Register = await TrainingGuest.findByIdAndUpdate({ email: input.email }, input)
                if (Register) {
                    return {
                        message: "Success!",
                        status: true
                    }
                } else {
                    return {
                        message: "Please make sure your email is correct!",
                        status: false
                    }
                }
            } catch (error) {
                return {
                    message: error.message,
                    status: false
                }
            }
        },
        deleteGuestRegister: async (_root: undefined, { _id }: { _id: string }) => {
            try {
                const Register = await TrainingGuest.findByIdAndDelete(_id)
                if (Register) {
                    return {
                        message: "Success!",
                        status: true
                    }
                } else {
                    return {
                        message: "Fail!",
                        status: false
                    }
                }
            } catch (error) {
                return {
                    message: error.message,
                    status: false
                }
            }
        },
        guestValuation: async (_root: undefined, { email, trainingId, input }: { email: string, trainingId: string, input: any }) => {
            try {
                const getGeust = await TrainingGuest.findOne({ trainingId, email })
                if (!getGeust) {
                    return {
                        message: `Make sure this email ${email} is used for the register last time!`,
                        return: false
                    }
                }
                const getTrainging = await Training.findById(trainingId)
                if (!getTrainging) {
                    return {
                        message: "Cannot find Trainging!",
                        status: false
                    }
                }
                if (getTrainging.status != "Completed") {
                    return {
                        message: "The Evaluation is not yet allowed!",
                        status: false
                    }
                }

                const Register = await TrainingGuest.findOneAndUpdate({
                    trainingId, email
                },
                    { valuation: input })
                if (Register) {
                    return {
                        message: "Success!",
                        status: true
                    }
                } else {
                    return {
                        message: "Fail!",
                        status: false
                    }
                }
            } catch (error) {
                return {
                    message: error.message,
                    status: false
                }
            }
        },
        guestValuationLoing: async (_root: undefined, { email, trainingId }: { email: string, trainingId: string }) => {
            try {
                const getGeust = await TrainingGuest.findOne({ trainingId, email })
                if (!getGeust) {
                    return {
                        message: `Make sure this email ${email} is used for the register last time!`,
                        return: false
                    }
                }
                const getTrainging = await Training.findById(trainingId)
                if (!getTrainging) {
                    return {
                        message: "Cannot find Trainging!",
                        status: false
                    }
                }
                if (getTrainging.status != "Completed") {
                    return {
                        message: "The Evaluation is not yet allowed!",
                        status: false
                    }
                }

                return {
                    message: "Success!",
                    status: true
                }
            } catch (error) {
                return {
                    message: error.message,
                    status: false
                }
            }
        },
        checkGuestAttendance: async (_root: undefined, { guestId, status }: { guestId: string, status: string }) => {
            try {
                const Register = await TrainingGuest.findByIdAndUpdate(guestId,
                    { status })
                if (Register) {
                    return {
                        message: "Success!",
                        status: true
                    }
                } else {
                    return {
                        message: "Fail!",
                        status: false
                    }
                }
            } catch (error) {
                return {
                    message: error.message,
                    status: false
                }
            }
        },

        // Question================================
        createQuestion: async (_root: undefined, { question, type, multiple }: { question: string, type: string, multiple: string }) => {
            try {
                const add = await new Question({ question, type, multiple }).save()
                if (add) {
                    return {
                        message: "Success!",
                        status: true
                    }
                }
            } catch (error) {
                return error
            }
        },
        updateQuestion: async (_root: undefined, { _id, question, type, multiple }: { _id: string, question: string, type: string, multiple: string }) => {
            try {
                const upd = await Question.findByIdAndUpdate(_id, { question, type, multiple });
                if (upd) {
                    return {
                        message: "Success!",
                        status: true
                    }
                } else {
                    return {
                        message: "Fail!",
                        status: false
                    }
                }
            } catch (error) {
                return {
                    message: error.message,
                    status: false
                }
            }
        },
        deleteQuestion: async (_root: undefined, { _id }: { _id: string }) => {
            try {
                const chekcInUse: any = Training.find({ questions: _id });
                if (chekcInUse.length > 0) {
                    return {
                        message: "The Question is in use!",
                        status: false
                    }
                }
                const dls = await Question.findByIdAndDelete(_id);
                if (dls) {
                    return {
                        message: "Success!",
                        status: true
                    }
                } else {
                    return {
                        message: "Fail!",
                        status: false
                    }
                }
            } catch (error) {
                return {
                    message: error.message,
                    status: false
                }
            }
        },
        addTrainingQuestion: async (_root: undefined, { trainingId, questions }: { trainingId: string, questions: any }) => {
            try {
                const getTraining = await Training.findByIdAndUpdate(trainingId, { questions })

                if (getTraining) {
                    return {
                        message: "Success!",
                        status: true
                    }
                } else {
                    return {
                        message: "Fail!",
                        status: false
                    }
                }
            } catch (error) {
                return error
            }
        }
    }
};

export default trainingResolver;