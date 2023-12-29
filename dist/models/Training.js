"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrainingGuest = exports.Question = exports.Training = void 0;
const mongoose_1 = require("mongoose");
const mongoose_paginate_v2_1 = __importDefault(require("mongoose-paginate-v2"));
const TrainingSchema = new mongoose_1.Schema({
    topic: String,
    cover: String,
    speakers: [String],
    date: Date,
    start: String,
    end: String,
    venue: String,
    description: String,
    questions: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "questions" }],
    status: { type: String, enum: ["Not Yet Started", "In Progress", "Completed"], default: "Not Yet Started" },
    createdAt: { type: Date, default: Date.now }
});
const QuestionSchema = new mongoose_1.Schema({
    question: String,
    type: String,
    multiple: [String],
    singular: String,
    createdAt: { type: Date, default: Date.now }
});
const TrainingGuestSchema = new mongoose_1.Schema({
    firstName: String,
    lastName: String,
    gender: String,
    position: String,
    from: String,
    tell: String,
    email: String,
    expectation: String,
    trainingId: { type: mongoose_1.Schema.Types.ObjectId, ref: "" },
    valuation: [{
            questionId: { type: mongoose_1.Schema.Types.ObjectId, ref: "questions" },
            answer: String
        }],
    attendance: String,
    createdAt: { type: Date, default: Date.now }
});
QuestionSchema.plugin(mongoose_paginate_v2_1.default);
TrainingSchema.plugin(mongoose_paginate_v2_1.default);
TrainingGuestSchema.plugin(mongoose_paginate_v2_1.default);
const Training = (0, mongoose_1.model)('trainings', TrainingSchema);
exports.Training = Training;
const Question = (0, mongoose_1.model)('questions', QuestionSchema);
exports.Question = Question;
const TrainingGuest = (0, mongoose_1.model)('trainingGuests', TrainingGuestSchema);
exports.TrainingGuest = TrainingGuest;
