"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Question = exports.Training = void 0;
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
    status: String,
    createdAt: { type: Date, default: Date.now }
});
const QuestionSchema = new mongoose_1.Schema({
    question: String,
    type: String,
    multiple: [String],
    singular: String,
    createdAt: { type: Date, default: Date.now }
});
QuestionSchema.plugin(mongoose_paginate_v2_1.default);
TrainingSchema.plugin(mongoose_paginate_v2_1.default);
const Training = (0, mongoose_1.model)('trainings', TrainingSchema);
exports.Training = Training;
const Question = (0, mongoose_1.model)('questions', QuestionSchema);
exports.Question = Question;
