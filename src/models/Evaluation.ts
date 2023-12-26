import mongoose, { Schema, model } from "mongoose"
import paginate from 'mongoose-paginate-v2'
import { iEmployeeEvaluate, iEvaluation, iEvaluationScore } from "../interface/iEvaluation";

const EvaluationSchema = new Schema<iEvaluation>({
    title: String,
    type: { type: String, enum: ["Score", "Choice"] },
    evaluations: [String],
    createdAt: { type: Date, default: Date.now }
})

const EmployeeEvaluateSchema = new Schema<iEmployeeEvaluate>({
    date: Date,
    type: String,
    employeeId: { type: mongoose.Types.ObjectId, ref: 'employees' },
    evaluations: [
        {
            title: { type: mongoose.Types.ObjectId, ref: 'evaluates' },
            value: [
                {
                    evaluation: String,
                    point: Number
                }
            ]
        }
    ],
    evaluationBy: { type: mongoose.Types.ObjectId, ref: 'employees' },
    commentsBy: [{ text: String, user: { type: mongoose.Types.ObjectId, ref: 'employees' }, date: { type: Date, default: Date.now } }],
    createdAt: { type: Date, default: Date.now }
})

const EvaluationScoreSchema = new Schema<iEvaluationScore>({
    evaluation: String,
    score: Number,
    createdAt: { type: Date, default: Date.now }
})

EvaluationSchema.plugin(paginate);
EmployeeEvaluateSchema.plugin(paginate);
EvaluationScoreSchema.plugin(paginate);

const Evaluation = model<iEvaluation, mongoose.PaginateModel<iEvaluation>>('evaluates', EvaluationSchema);
const EmployeeEvaluate = model<iEmployeeEvaluate, mongoose.PaginateModel<iEmployeeEvaluate>>('employeeEvaluates', EmployeeEvaluateSchema);
const EvaluationScore = model<iEvaluationScore, mongoose.PaginateModel<iEvaluationScore>>('evaluateScores', EvaluationScoreSchema);

export { Evaluation, EmployeeEvaluate, EvaluationScore };