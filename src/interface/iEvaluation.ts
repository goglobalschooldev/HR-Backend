import { ObjectId } from "mongoose";
import { iEmployee } from "./iEmployee";

export interface iEvaluation {
    _id: ObjectId;
    title: string;
    type: string;
    evaluations: [string];
    createdAt: Date;
}
export interface iEmployeeEvaluate {
    _id: ObjectId;
    date: Date;
    type: string;
    employeeId: iEmployee;
    evaluations: [iEvaluateEmp]
    evaluationBy: iEmployee;
    commentsBy: [iEvaluateComment];
    createdAt: Date;
}

interface iEvaluateEmp {
    title: string;
    value: [
        {
            evaluation: string;
            point: number;
        }
    ];
}

interface iEvaluateComment {
    _id: ObjectId;
    text: string;
    user: iEmployee;
    date: Date;
    createdAt: Date;
}

export interface iEvaluationScore {
    _id: ObjectId;
    evaluation: string;
    score: number;
    createdAt: Date;
}