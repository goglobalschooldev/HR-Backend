import { iTraining } from "../../interface/iTraining";
import { Training } from "../../models/Training"



const trainingResolver = {
    // Query: {
    //     getTrainingwithPagination: async (__, { page, limit, keyword, status }) => {
    //         try {
    //             const options = {
    //                 page: page || 1,
    //                 limit: limit || 10,
    //                 pagination: true,
    //                 customLabels: TrainigLabel,
    //                 sort: {
    //                     createdAt: -1,
    //                 },
    //                 // populate: "type_timeoff request_by approve_by cancel_by"
    //             };
    //             const statusQuery = status === "All" ? {} : { status }
    //             const query = {
    //                 $and: [
    //                     { topic: { $regex: keyword, $options: "i" } },
    //                     statusQuery
    //                 ]
    //             };
    //             const Trainings = await Training.paginate(query, options);
    //             return Trainings
    //         } catch (error) {
    //             return error
    //         }
    //     },
    //     getTrainingById: async (__, { _id }) => {
    //         try {
    //             const data = await Training.findById(_id);
    //             return data
    //         } catch (error) {
    //             return error
    //         }
    //     },
    //     getGuestRegisterwithPagination: async (__, { page, limit, keyword, trainingId, evaluation }) => {
    //         try {
    //             const options = {
    //                 page: page || 1,
    //                 limit: limit || 10,
    //                 pagination: true,
    //                 customLabels: TrainigLabel,
    //                 sort: {
    //                     createdAt: -1,
    //                 },
    //             };
    //             const evaluationQury = evaluation ? { valuation: { $exists: true, $not: { $size: 0 } } } : {}
    //             const query = {
    //                 $and: [
    //                     {
    //                         $or: [
    //                             {
    //                                 $expr: {
    //                                     $regexMatch: {
    //                                         input: { $concat: ['$firstName', ' ', '$lastName'] },
    //                                         regex: keyword,
    //                                         options: 'i',
    //                                     }
    //                                 }
    //                             }]
    //                     },
    //                     { trainingId: new mongoose.Types.ObjectId(trainingId) },

    //                     evaluationQury
    //                 ]
    //             };
    //             const Trainings = await TrainingGuest.paginate(query, options);
    //             const getEvas = await TrainingGuest.find({ trainingId: new mongoose.Types.ObjectId(trainingId) })
    //             const getHasEval = await TrainingGuest.find({
    //                 $and: [
    //                     { trainingId: new mongoose.Types.ObjectId(trainingId) },
    //                     evaluationQury
    //                 ]
    //             })
    //             const getFeale = getEvas.filter(female => female.gender != "Male")
    //             return {
    //                 data: Trainings.data,
    //                 total: getEvas.length,
    //                 female: getFeale.length,
    //                 evaluation: getHasEval.length,
    //                 paginator: Trainings.paginator
    //             }
    //         } catch (error) {
    //             return error
    //         }
    //     },
    //     getEvaluationTrainingByGuest: async (__, { guestId }) => {
    //         try {
    //             const getGeust = await TrainingGuest.findById(guestId).populate("valuation.questionId")
    //             const data = getGeust.valuation.map(data => {
    //                 return {
    //                     _id: data.questionId._id,
    //                     question: data.questionId.question,
    //                     type: data.questionId.type,
    //                     anwser: data.answer
    //                 }
    //             })
    //             return data
    //         } catch (error) {
    //             return error
    //         }
    //     }
    // },
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

        // guestRegister: async (_root: undefined, { input }: { input: }) => {
        //     try {
        //         if (!input.email) {
        //             return {
        //                 message: "Email is require!",
        //                 status: false
        //             }
        //         }
        //         const getTrainging = await Training.findById(input.trainingId)
        //         if (!getTrainging) {
        //             return {
        //                 message: "Cannot find Trainging!",
        //                 status: false
        //             }
        //         }
        //         if (getTrainging.status != "Not Yet Started") {
        //             return {
        //                 message: "Registration has been closed!",
        //                 status: false
        //             }
        //         }
        //         const checkIsDuplication = await TrainingGuest.findOne({ email: input.email, trainingId: new mongoose.Types.ObjectId(input.trainingId) })
        //         if (checkIsDuplication) {
        //             return {
        //                 message: "Registration Sccessful!",
        //                 status: true
        //             }
        //         }
        //         const Register = await TrainingGuest(input).save()
        //         if (Register) {
        //             return {
        //                 message: "Success!",
        //                 status: true
        //             }
        //         }
        //     } catch (error) {
        //         return {
        //             message: error.message,
        //             status: false
        //         }
        //     }
        // },
        // updateGuestRegister: async (__, { input }) => {
        //     try {
        //         const Register = await TrainingGuest.findByIdAndUpdate({ email: input.email }, input)
        //         if (Register) {
        //             return {
        //                 message: "Success!",
        //                 status: true
        //             }
        //         } else {
        //             return {
        //                 message: "Please make sure your email is correct!",
        //                 status: false
        //             }
        //         }
        //     } catch (error) {
        //         return {
        //             message: error.message,
        //             status: false
        //         }
        //     }
        // },
        // deleteGuestRegister: async (__, { _id }) => {
        //     try {
        //         const Register = await TrainingGuest.findByIdAndDelete(_id)
        //         if (Register) {
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
        //         return {
        //             message: error.message,
        //             status: false
        //         }
        //     }
        // },
        // guestValuation: async (__, { email, trainingId, input }) => {
        //     try {
        //         const getGeust = await TrainingGuest.findOne({ trainingId, email })
        //         if (!getGeust) {
        //             return {
        //                 message: `Make sure this email ${email} is used for the register last time!`,
        //                 return: false
        //             }
        //         }
        //         const getTrainging = await Training.findById(trainingId)
        //         if (!getTrainging) {
        //             return {
        //                 message: "Cannot find Trainging!",
        //                 status: false
        //             }
        //         }
        //         if (getTrainging.status != "Completed") {
        //             return {
        //                 message: "The Evaluation is not yet allowed!",
        //                 status: false
        //             }
        //         }

        //         const Register = await TrainingGuest.findOneAndUpdate({
        //             trainingId, email
        //         },
        //             { valuation: input })
        //         if (Register) {
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
        //         return {
        //             message: error.message,
        //             status: false
        //         }
        //     }
        // },
        // guestValuationLoing: async (__, { email, trainingId, input }) => {
        //     try {
        //         const getGeust = await TrainingGuest.findOne({ trainingId, email })
        //         if (!getGeust) {
        //             return {
        //                 message: `Make sure this email ${email} is used for the register last time!`,
        //                 return: false
        //             }
        //         }
        //         const getTrainging = await Training.findById(trainingId)
        //         if (!getTrainging) {
        //             return {
        //                 message: "Cannot find Trainging!",
        //                 status: false
        //             }
        //         }
        //         if (getTrainging.status != "Completed") {
        //             return {
        //                 message: "The Evaluation is not yet allowed!",
        //                 status: false
        //             }
        //         }

        //         return {
        //             message: "Success!",
        //             status: true
        //         }
        //     } catch (error) {
        //         return {
        //             message: error.message,
        //             status: false
        //         }
        //     }
        // },
        // checkGuestAttendance: async (__, { guestId, status }) => {
        //     try {
        //         const Register = await TrainingGuest.findByIdAndUpdate(guestId,
        //             { status })
        //         if (Register) {
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
        //         return {
        //             message: error.message,
        //             status: false
        //         }
        //     }
        // },
    }
};

export default trainingResolver;