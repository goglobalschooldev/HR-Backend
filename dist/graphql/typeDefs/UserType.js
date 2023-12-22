"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserType = `#graphql
    type User {
        _id: ID
        firstName: String
        lastName: String
        latinName: String
        role: String
        email: String
        profileImage: String
    }
    type  UserPagination {
        data: [User]
        paginator: Paginator
    }
    type UserLogin {
        user: User
        token: String
        status: Boolean
        message: String
    }
    type Query {
        getUsersPagination(page: Int!, limit: Int!, keyword: String!): UserPagination!
        getUserLogin: UserLogin!
        getUserMobileLogin(token: String): UserLogin!
    }
    type Mutation {
        addUser(employeeId: ID!, role: String!): Message!
        removeUser(employeeId: ID!): Message!
        mobileLogin(email: String!, password: String!): UserLogin!
        systemLogin(email: String!, password: String!): UserLogin!
    }
`;
exports.default = UserType;
