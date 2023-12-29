import { ObjectId } from "mongoose";

export interface iTraining {
    _id: ObjectId;
    topic: string;
    cover: string;
    speakers: [string];
    date: Date;
    start: string;
    end: string;
    venue: string;
    description: string;
    questions: [iQuestion],
    status: string;
    createdAt: Date;
}
export interface iQuestion {
    _id: ObjectId;
    question: string;
    type: string;
    multiple: [string]
    singular: string;
    createdAt: Date;
}

export interface iTrainingGuest {
    _id: ObjectId;
    firstName: string;
    lastName: string;
    gender: string;
    position: string;
    from: string;
    tell: string;
    email: string;
    expectation: string;
    trainingId: iTraining
    valuation: [iValuationTrainingQuestion]
    attendance: string;
    createdAt: Date;
}

interface iValuationTrainingQuestion {
    questionId: iQuestion
    answer: string;
}
// "", "L", "C", "A", "P"