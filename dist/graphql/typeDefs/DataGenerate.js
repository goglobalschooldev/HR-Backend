"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataGenerate = `#graphql

    type Query {
        generateData(id:ID): Message!
    } 
`;
exports.default = DataGenerate;
