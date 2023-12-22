"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose_paginate_v2_1 = __importDefault(require("mongoose-paginate-v2"));
const NotificationSchema = new mongoose_1.Schema({
    type: { type: String, enum: ["leave", "meeting"] },
    forUser: [String],
    navigetId: mongoose_1.Schema.Types.ObjectId,
    title: String,
    body: String,
    viewers: [String],
    date: Date,
    time: String,
    createdAt: { type: Date, default: Date.now }
});
NotificationSchema.plugin(mongoose_paginate_v2_1.default);
const Notification = (0, mongoose_1.model)('notifications', NotificationSchema);
exports.default = Notification;
