import { Question, Training } from "../../models/Training";

const questionResolver = {
    Query: {
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
        createQuestion: async (_root: undefined, { question, type, multiple }: { question: string, type: string, multiple: [string] }) => {
            try {
                const add = await new Question({ question, type, multiple }).save()
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
        updateQuestion: async (_root: undefined, { _id, question, type, multiple }: { _id: string, question: string, type: string, multiple: [string] }) => {
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
        // addTrainingQuestion: async (_root: undefined, { trainingId, questions }:{ trainingId, questions }) => {
        //     try {
        //         const getTraining = await Training.findByIdAndUpdate(trainingId, { questions })

        //         if (getTraining) {
        //             return {
        //                 message: "Success!",
        //                 status: true
        //             }
        //         } else {
        //             return {
        //                 message: "Fail!",
        //                 status: false
        //             }
        //         }
        //     } catch (error) {
        //         return error
        //     }
        // }
    }
};

export default questionResolver;