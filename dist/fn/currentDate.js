"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.currentTime = exports.currentDate = void 0;
const currentDate = (data) => {
    let today = data === undefined ? new Date() : new Date(data);
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let dt = today.getDate();
    let newDay = dt < 10 ? '0' + String(dt) : String(dt);
    let newMonth = month < 10 ? '0' + String(month) : String(month);
    let fullDate = year + '-' + newMonth + '-' + newDay;
    return fullDate;
};
exports.currentDate = currentDate;
const currentTime = () => {
    const d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let lasH = h.toString().length === 1 ? "0" + h : h;
    let lasM = m.toString().length === 1 ? "0" + m : m;
    let scanningTime = lasH + ":" + lasM;
    return scanningTime;
};
exports.currentTime = currentTime;
