"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GlobalType = `#graphql
    type DashboardInfo {
        totalEmployee: Int
        totalResign: Int
        todayLate: Float
        todayPermision: Float
    }
    type Query {
       getDashboardInfo: DashboardInfo! 
    }
`;
exports.default = GlobalType;
