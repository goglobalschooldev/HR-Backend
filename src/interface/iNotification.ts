import { ObjectId } from "mongoose";

export interface iNotification {
    _id: ObjectId;
    type: string;  // meeting leave
    forUser: [string]
    navigetId: ObjectId;
    title: string;
    body: string;
    date: Date;
    time:string;
    viewers: [string];
    createdAt: Date;
}

// interface iNotifBy {
//     image: String;
//     name: String
// }
