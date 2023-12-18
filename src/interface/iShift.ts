import { ObjectId } from "mongoose";
import { iEmployee } from "./iEmployee";
import { iPublicHoliday } from "./iBranch";

export interface iShift {
    _id: ObjectId;
    from: Date;
    to: Date;
    shiftOff: string;
    reason: string;
    timeOff: iPublicHoliday;
    requestBy: iEmployee;
    approveBy: iEmployee;
    approveStatus: string;
    cancelBy: iEmployee;
    hrComment: string;
    requestAt: string;
    createdAt: Date;
}

export interface iLeaveInput {
    from: Date;
    to: Date;
    shiftOff: string;
    timeOff: string;
    reason: string;
}

// ["pending", "cancel", "approve"] },
// { type: String, enum: ["AllDay", "Morning", "Afternoon"] },