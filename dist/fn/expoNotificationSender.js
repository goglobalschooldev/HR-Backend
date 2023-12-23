"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.expoNotificationSender = void 0;
const expo_server_sdk_1 = require("expo-server-sdk");
const dotenv_1 = __importDefault(require("dotenv"));
const MobileUserToken_1 = __importDefault(require("../models/MobileUserToken"));
const expoNotificationSender = async (notifById, title, body, navigetId, type) => {
    const getToken = await MobileUserToken_1.default.find({ user: { $in: notifById } });
    const tokens = getToken.map((token) => token.token);
    dotenv_1.default.config();
    let expo = new expo_server_sdk_1.Expo();
    let messages = [];
    for (let pushToken of tokens) {
        if (!expo_server_sdk_1.Expo.isExpoPushToken(pushToken)) {
            console.error("Push token" + `${pushToken}` + "is not a valid Expo push token");
            continue;
        }
        messages.push({
            to: pushToken,
            sound: 'default',
            vibration: true,
            title,
            body,
            priority: 'high',
            data: {
                navigetId,
                type
            },
        });
    }
    let chunks = expo.chunkPushNotifications(messages);
    let tickets = [];
    (async () => {
        for (let chunk of chunks) {
            try {
                let ticketChunk = await expo.sendPushNotificationsAsync(chunk);
                console.log(ticketChunk, "expo");
                tickets.push(...ticketChunk);
            }
            catch (error) {
                console.error(error, "An error occured");
            }
        }
    })();
};
exports.expoNotificationSender = expoNotificationSender;
