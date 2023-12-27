import mongoose from "mongoose";
import AuchCheck from "../../auth/AuchCheck";
import MessageRespone from "../../fn/MessageRespone"
import { currentDate } from "../../fn/currentDate";
import { iEmployeeEvaluate, iEvaluation } from "../../interface/iEvaluation"
import Employee from "../../models/Employee";
import { EmployeeEvaluate, Evaluation, EvaluationScore } from "../../models/Evaluation"
import express from 'express';
import { getPosition } from "../../fn/getPosition";

const EvaluationResolver = {
    Query: {
        getEvaluations: async (_root: undefined, { keyword }: { keyword: string }) => {
            try {
                const getEvaluations = await Evaluation.find({
                    title: { $regex: keyword, $options: "i" }
                })

                const Evaluations = getEvaluations?.map((data: iEvaluation) => {

                    return {
                        _id: data?._id,
                        title: data?.title,
                        evaluationType: data?.type,
                        evaluations: data?.evaluations
                    }
                })
                return Evaluations;
            } catch (error) {
                return error
            }
        },
        getEvaluationByEmployee: async (_root: undefined, { employeeId }: { employeeId: string }) => {
            try {
                const getEvaluations = await EmployeeEvaluate.find({
                    employeeId: new mongoose.Types.ObjectId(employeeId)
                }).populate("evaluationBy commentsBy.user evaluations.title")

                const data = await Promise.all(
                    getEvaluations.map(async (evalua: any) => {
                        const getEvaluationScore = evalua?.evaluations?.filter((ev: any) => ev?.title?.type === "Score")
                        const getEvaluationChoice = evalua?.evaluations?.filter((ev: any) => ev?.title?.type === "Choice")

                        // EvaluationScore====================
                        const evaluationScore = getEvaluationScore.map((eva: any) => {
                            return {
                                _id: eva?._id,
                                title: eva?.title?.title,
                                value: eva?.value
                            }
                        })
                        const av = getEvaluationScore.map((eva: any) => {
                            const points = eva.value.map((point: any) => point?.point);
                            const sum = points.reduce((accumulator: any, currentValue: any) => {
                                return accumulator + currentValue;
                            }, 0);

                            return sum / points.length;
                        })

                        const sumav = av.reduce((accumulator: any, currentValue: any) => {
                            return accumulator + currentValue;
                        }, 0);

                        // Get Overall Average ============================
                        const overallAverage: number = sumav / av.length;



                        let intNumber = Math.floor(overallAverage);

                        const getOverallScore = await EvaluationScore.findOne({ score: { $eq: intNumber } });
                        // position ===========
                        const position = await getPosition(evalua?.evaluationBy?._id);
                        // evaluationChoice
                        const evaluationChoice = getEvaluationChoice.map((eva: any) => {
                            const value = eva?.value?.find((val: any) => val?.point === 1)
                            // console.log(value);
                            return {
                                _id: eva?._id,
                                title: eva?.title?.title,
                                value: value?.evaluation
                            }
                        })
                        return {
                            _id: evalua._id,
                            date: evalua.date,
                            type: evalua.type,
                            evaluationBy: evalua?.evaluationBy?.latinName,
                            evaluationBySrc: evalua?.evaluationBy?.profileImage,
                            evaluationByPosition: position === undefined ? "No Cotract" : position,
                            evaluationScore,
                            overallScore: getOverallScore?.evaluation,
                            evaluationChoice,
                            overallAverage
                        }
                    })
                )
                return data
            } catch (error) {
                return error
            }
        },
        getHeadCommentsEvaluation: async (_root: undefined, { evaluationId }: { evaluationId: string }) => {
            try {
                const getEvaluations = await EmployeeEvaluate.findById(evaluationId).populate("commentsBy.user");

                const commentsBy: any = getEvaluations.commentsBy.map(user => {
                    // console.log(user.user);
                    return {
                        _id: user._id,
                        text: user.text,
                        userName: commentsBy?.user?.lanitnName,
                        userSrc: commentsBy?.user?.profileImage,
                        date: user.date
                    }
                });

                return commentsBy
            } catch (error) {
                return error
            }
        },
        getEvaluationScore: async (_root: undefined) => {
            try {
                const data = await EvaluationScore.find();
                return data
            } catch (error) {
                return error
            }
        }
    },
    Mutation: {
        createEvaluation: async (_root: undefined, { title, evaluations, evaluationType }: { title: string, evaluations: [string], evaluationType: String }) => {
            try {
                const add = await new Evaluation({ title, evaluations, type: evaluationType }).save()
                if (add) {
                    return MessageRespone(true)
                }
            } catch (error) {
                return error
            }
        },
        updateEvaluation: async (_root: undefined, { _id, title, evaluations, evaluationType }: { _id: string, title: string, evaluations: [string], evaluationType: String }) => {
            try {
                const upd = await Evaluation.findByIdAndUpdate(_id, { title, evaluations, type: evaluationType });
                if (upd) {
                    return MessageRespone(true)
                } else {
                    return MessageRespone(false)
                }
            } catch (error) {
                return error
            }
        },
        deleteEvaluation: async (_root: undefined, { _id }: { _id: string }) => {
            try {

                const dls = await Evaluation.findByIdAndDelete(_id);
                if (dls) {
                    return MessageRespone(true)
                } else {
                    return MessageRespone(false)
                }
            } catch (error) {
                return error
            }
        },

        employeeEvaluation: async (_root: undefined, { input }: { input: iEmployeeEvaluate }, { req }: { req: express.Request }) => {
            try {
                const auchCheck = await AuchCheck(req);
                if (!auchCheck.status) {
                    return new Error(auchCheck.message);
                }
                const Evaluation = await new EmployeeEvaluate({
                    date: currentDate(),
                    evaluationBy: auchCheck?.user?.user_id?.toString(),
                    ...input
                }).save()
                if (Evaluation)
                    return MessageRespone(true)
            } catch (error) {
                return error
            }
        },
        editEmployeeEvaluation: async (_root: undefined, { _id, input }: { _id: string, input: iEmployeeEvaluate }, { req }: { req: express.Request }) => {
            try {
                const auchCheck = await AuchCheck(req);
                if (!auchCheck.status) {
                    return new Error(auchCheck.message);
                }
                const getEmployee = await Employee.findById(auchCheck.user.user_id.toString());
                if (getEmployee?.role != "superAdmin") {
                    return {
                        status: false,
                        message: "You do not have the permissions."
                    }
                }
                const Evaluation = await EmployeeEvaluate.findByIdAndUpdate(_id, input)
                if (Evaluation) {
                    return MessageRespone(true)
                } else {
                    return MessageRespone(false)
                }
            } catch (error) {
                return error
            }
        },
        deleteEmployeeEvaluation: async (_root: undefined, { _id, }: { _id: string }, { req }: { req: express.Request }) => {
            try {
                const auchCheck = await AuchCheck(req);
                if (!auchCheck.status) {
                    return new Error(auchCheck.message);
                }
                const getEmployee = await Employee.findById(auchCheck.user.user_id.toString());
                if (getEmployee.role != "superAdmin") {
                    return {
                        status: false,
                        message: "You do not have the permissions."
                    }
                }
                const Evaluation = await EmployeeEvaluate.findByIdAndDelete(_id)
                if (Evaluation) {
                    return MessageRespone(true)
                } else {
                    return MessageRespone(false)
                }
            } catch (error) {
                return error
            }
        },

        headCommentEvaluation: async (_root: undefined, { _id, text }: { _id: string, text: string }, { req }: { req: express.Request }) => {
            try {
                const auchCheck = await AuchCheck(req);
                if (!auchCheck.status) {
                    return new Error(auchCheck.message);
                };
                const Evaluation = await EmployeeEvaluate.findByIdAndUpdate(_id, { $push: { commentsBy: { text, user: auchCheck?.user?.user_id?.toString() } } })
                if (Evaluation) {
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
        },
        removeHeadCommentEvaluation: async (_root: undefined, { _id, commentId }: { _id: string, commentId: string }, { req }: { req: express.Request }) => {
            try {
                const auchCheck = await AuchCheck(req);
                if (!auchCheck.status) {
                    return new Error(auchCheck.message);
                }
                const getEmployee = await Employee.findById(auchCheck?.user?.user_id.toString());
                if (getEmployee.role != "superAdmin") {
                    return {
                        status: false,
                        message: "You do not have the permissions."
                    }
                }
                const Evaluation = await EmployeeEvaluate.findByIdAndUpdate(_id, {
                    $pull: {
                        commentsBy: { _id: commentId }
                    }
                })
                if (Evaluation) {
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

        // getEvaluationScore
        createEvaluationScore: async (_root: undefined, { evaluation, score }: { evaluation: string, score: string }) => {
            try {
                const addd = await new EvaluationScore({ evaluation, score }).save()
                if (addd) {
                    return MessageRespone(true)
                }
            } catch (error) {
                return error
            }
        },
        updateEvaluationScore: async (_root: undefined, { _id, evaluation, score }: { _id: string, evaluation: string, score: string }) => {
            try {
                const update = await EvaluationScore.findByIdAndUpdate(_id, { evaluation, score })
                if (update) {
                    return MessageRespone(true)
                } else {
                    return MessageRespone(false)
                }
            } catch (error) {
                return error
            }
        },
        deleteEvaluationScore: async (_root: undefined, { _id }: { _id: string }) => {
            try {
                const del = await EvaluationScore.findByIdAndDelete(_id)
                if (del) {
                    return MessageRespone(true)
                } else {
                    return MessageRespone(false)
                }
            } catch (error) {
                return error
            }
        }
    }
}
export default EvaluationResolver;