import { Expo } from 'expo-server-sdk';
import dotenv from 'dotenv';
import MobileUserToken from '../models/MobileUserToken';

export const expoNotificationSender = async (notifById: [string], title: string, body: string, navigetId: string, type: string) => {
    const getToken = await MobileUserToken.find({ user: { $in: notifById } })
    const tokens = getToken.map((token: any) => token.token)
    dotenv.config();
    let expo = new Expo();
    let messages: any = [];

    for (let pushToken of tokens) {
        if (!Expo.isExpoPushToken(pushToken)) {
            console.error("Push token" + `${pushToken}` + "is not a valid Expo push token");
            continue;
        }
        messages.push({
            to: pushToken,
            sound: 'default',
            vibration: true,
            title,
            body,
            // subtitle: 'Hello World',
            priority: 'high',
            data: {
                navigetId,
                type
            },
        })
    }

    let chunks = expo.chunkPushNotifications(messages);
    let tickets = [];
    (async () => {
        for (let chunk of chunks) {
            try {
                let ticketChunk = await expo.sendPushNotificationsAsync(chunk);
                console.log(ticketChunk, "expo");
                tickets.push(...ticketChunk);
            } catch (error) {
                console.error(error, "An error occured");
            }
        }
    })();

}