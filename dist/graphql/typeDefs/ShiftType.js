"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GlobalType = `#graphql
    type Shift {
        _id: ID
        from: Date
        to: Date
        reason: String
        shiftOff: String
        typeShiftOff: String
        requestBy: String
        approveBy: String
        cancelBy: String
        requestByProfile: String
        approveByProfile: String
        cancelByProfile: String
        hrComment: String
        requestAt: String
    }
    enum AlloweShiftOff {
        AllDay
        Morning
        Afternoon
    }
    input LeaveInput {
        from: Date
        to: Date
        shiftOff: AlloweShiftOff
        timeOff: ID
        reason: String
    }
    type TimeOffs {
        _id: ID
        timeOff: String
    }
    enum AllowShiftStatus {
        pending
        cancel
        approve
    }
    type ShiftsPagination {
        data: [Shift]
        paginator: Paginator
    }
    type Query {
        getTimeOffsForMobile: [TimeOffs]
        getShiftsPagination(page: Int!, limit: ID!, keyword: String!, shiftStatus: AllowShiftStatus!, from: String!, to: String!, branchId: ID!): ShiftsPagination!
    }
    type Mutation {
        requestLeave(input: LeaveInput!): Message!
        cancelLeave(leaveID: ID!, hrComment: String!): Message!
        approveLeave(leaveID: ID!, hrComment: String!): Message!
    }
`;
exports.default = GlobalType;
