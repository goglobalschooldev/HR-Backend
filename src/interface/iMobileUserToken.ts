import { ObjectId } from "mongoose";
import { iEmployee } from "./iEmployee";
export interface iMobileUserToken {
    _id: ObjectId;
    token: string;
    user: iEmployee;
    createdAt: Date;
}     