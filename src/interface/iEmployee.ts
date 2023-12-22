import { ObjectId } from "mongoose";
import { iBranch, iPublicHoliday } from "./iBranch";

export interface iEmployee {
    _id: ObjectId;
    idCard: ObjectId;
    nationalId: string;
    employeeId: string;
    firstName: string;
    lastName: string;
    latinName: string;
    gender: string;
    profileImage: string;
    joinDate: Date;
    dob: Date;
    placeOfBirth: string;
    nationality: string;
    tell: string;
    email: string;
    currentAddress: string;
    branch: iBranch
    workingStatus: string;
    marital: string;
    workBook: Boolean;
    role: string;
    type: string;
    createdAt: Date;
}
export interface iEmployeePublicHoliday {
    _id: ObjectId;
    employeeId: iEmployee;
    title: iPublicHoliday;
    totalDay: number;
    year: string;
    status: Boolean;
    createdAt: Date;
}
export interface iEmployeeWarning {
    _id: ObjectId;
    employeeId: iEmployee;
    date: Date;
    description: string;
    resolution: string;
    result: string;
    remark: string;
    createdAt: Date;
}