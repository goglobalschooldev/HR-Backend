import mongoose, { Schema, model } from "mongoose"
import paginate from 'mongoose-paginate-v2'
import { iQuestion, iTraining, iTrainingGuest } from "../interface/iTraining";

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
    status: { type: String, enum: ["Not Yet Started", "In Progress", "Completed"], default: "Not Yet Started" },
    createdAt: { type: Date, default: Date.now }
})

const QuestionSchema = new Schema<iQuestion>({
    question: String,
    type: String,
    multiple: [String],
    singular: String,
    createdAt: { type: Date, default: Date.now }
})
const TrainingGuestSchema = new Schema<iTrainingGuest>({
    firstName: String,
    lastName: String,
    gender: String,
    position: String,
    from: String,
    tell: String,
    email: String,
    expectation: String,
    trainingId: { type: Schema.Types.ObjectId, ref: "" },
    valuation: [{
        questionId: { type: Schema.Types.ObjectId, ref: "questions" },
        answer: String
    }],
    attendance: String,
    createdAt: { type: Date, default: Date.now }
})
QuestionSchema.plugin(paginate);
TrainingSchema.plugin(paginate);
TrainingGuestSchema.plugin(paginate);

const Training = model<iTraining, mongoose.PaginateModel<iTraining>>('trainings', TrainingSchema);
const Question = model<iQuestion, mongoose.PaginateModel<iQuestion>>('questions', QuestionSchema);
const TrainingGuest = model<iTrainingGuest, mongoose.PaginateModel<iTrainingGuest>>('trainingGuests', TrainingGuestSchema);

export { Training, Question, TrainingGuest };