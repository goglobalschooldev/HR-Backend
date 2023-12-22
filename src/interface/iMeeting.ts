import { ObjectId } from "mongoose";
import { iEmployee } from "./iEmployee";
import { iAffair, iOffice, iPosition, iSection, iWrokingTime } from "./iBranch";

export interface iContract {
    _id: ObjectId;
    employeeId: iEmployee;
    contractTitle: iContractType;
    position: iPosition;
    affair: iAffair;
    office: iOffice;
    section: iSection;
    workingTime: [iWrokingTime];
    startDate: Date;
    endDate: Date;
    status: Boolean;
    createdAt: Date;
}
export interface iContractType {
    _id: ObjectId;
    title: string;
    createdAt: Date;
}