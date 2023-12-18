import mongoose, { Schema, model } from "mongoose"
import paginate from 'mongoose-paginate-v2'
import { iQuestion, iTraining } from "../interface/iTraining";

const TrainingSchema = new Schema<iTraining>({
    topic: String,
    cover: String,
    speakers: [String],
    date: Date,
    start: String,
    end: String,
    venue: String,
    description: String,
    questions: [{ type: Schema.Types.ObjectId, ref: "questions" }],
    status: String,
    createdAt: { type: Date, default: Date.now }
})

const QuestionSchema = new Schema<iQuestion>({
    question: String,
    type: String,
    multiple: [String],
    singular: String,
    createdAt: { type: Date, default: Date.now }
})

QuestionSchema.plugin(paginate);
TrainingSchema.plugin(paginate);


const Training = model<iTraining, mongoose.PaginateModel<iTraining>>('trainings', TrainingSchema);
const Question = model<iQuestion, mongoose.PaginateModel<iQuestion>>('questions', QuestionSchema);


export { Training, Question };