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