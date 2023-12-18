import { ObjectId } from "mongoose";
import { iEmployee } from "./iEmployee";

export interface iBranch {
    _id: ObjectId;
    branchName: string;
    longitude: string;
    latitude: string;
    createdAt: Date;
}

export interface iAffair {
    _id: ObjectId;
    affairName: string;
    createdAt: Date;
}

export interface iOffice {
    _id: ObjectId;
    officeName: string;
    createdAt: Date;
}

export interface iSection {
    _id: ObjectId;
    sectionName: string;
    createdAt: Date;
}

export interface iPosition {
    _id: ObjectId;
    position: string;
    createdAt: Date;
}

export interface iWrokingTime {
    _id: ObjectId;
    employeeId: iEmployee
    shiftName: string;
    start: string,
    end: string,
    createdAt: Date;
}

export interface iPublicHoliday {
    _id: ObjectId;
    publicHoliday: string;
    remark: string;
    createdAt: Date;
}