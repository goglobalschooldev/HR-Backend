"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const removeDuplicates = (inputArray) => {
    return [...new Set(inputArray)];
};
exports.default = removeDuplicates;
