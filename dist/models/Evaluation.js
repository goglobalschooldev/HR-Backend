"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvaluationScore = exports.EmployeeEvaluate = exports.Evaluation = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const mongoose_paginate_v2_1 = __importDefault(require("mongoose-paginate-v2"));
const EvaluationSchema = new mongoose_1.Schema({
    title: String,
    type: { type: String, enum: ["Score", "Choice"] },
    evaluations: [String],
    createdAt: { type: Date, default: Date.now }
});
const EmployeeEvaluateSchema = new mongoose_1.Schema({
    date: Date,
    type: String,
    employeeId: { type: mongoose_1.default.Types.ObjectId, ref: 'employees' },
    evaluations: [
        {
            title: { type: mongoose_1.default.Types.ObjectId, ref: 'evaluates' },
            value: [
                {
                    evaluation: String,
                    point: Number
                }
            ]
        }
    ],
    evaluationBy: { type: mongoose_1.default.Types.ObjectId, ref: 'employees' },
    commentsBy: [{ text: String, user: { type: mongoose_1.default.Types.ObjectId, ref: 'employees' }, date: { type: Date, default: Date.now } }],
    createdAt: { type: Date, default: Date.now }
});
const EvaluationScoreSchema = new mongoose_1.Schema({
    evaluation: String,
    score: Number,
    createdAt: { type: Date, default: Date.now }
});
EvaluationSchema.plugin(mongoose_paginate_v2_1.default);
EmployeeEvaluateSchema.plugin(mongoose_paginate_v2_1.default);
EvaluationScoreSchema.plugin(mongoose_paginate_v2_1.default);
const Evaluation = (0, mongoose_1.model)('evaluates', EvaluationSchema);
exports.Evaluation = Evaluation;
const EmployeeEvaluate = (0, mongoose_1.model)('employeeEvaluates', EmployeeEvaluateSchema);
exports.EmployeeEvaluate = EmployeeEvaluate;
const EvaluationScore = (0, mongoose_1.model)('evaluateScores', EvaluationScoreSchema);
exports.EvaluationScore = EvaluationScore;
