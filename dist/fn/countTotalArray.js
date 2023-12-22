"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countTotalArray = void 0;
const countTotalArray = (data) => {
    const total = data.length === 0 ? 0 : data?.reduce(function (a, b) { return a + b; });
    return total;
};
exports.countTotalArray = countTotalArray;
