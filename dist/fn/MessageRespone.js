"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MessageRespone = (ms) => {
    if (ms) {
        return {
            message: "Success!",
            status: true
        };
    }
    else {
        return {
            message: "Fail!",
            status: false
        };
    }
};
exports.default = MessageRespone;
