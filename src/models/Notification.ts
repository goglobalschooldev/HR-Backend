import mongoose, { Schema, model } from "mongoose"
import paginate from 'mongoose-paginate-v2'
import { iNotification } from "../interface/iNotification";

const NotificationSchema = new Schema<iNotification>({
    type: { type: String, enum: ["leave", "meeting"] },
    forUser: [String],
    navigetId: Schema.Types.ObjectId,
    title: String,
    body: String,
    viewers: [String],
    date: Date,
    time: String,
    createdAt: { type: Date, default: Date.now }
})

NotificationSchema.plugin(paginate);


const Notification = model<iNotification, mongoose.PaginateModel<iNotification>>('notifications', NotificationSchema);

export default Notification