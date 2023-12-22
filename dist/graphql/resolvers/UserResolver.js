"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AuchCheck_1 = __importDefault(require("../../auth/AuchCheck"));
const AuthAdmin_1 = __importDefault(require("../../auth/AuthAdmin"));
const MessageRespone_1 = __importDefault(require("../../fn/MessageRespone"));
const paginationLabel_1 = require("../../fn/paginationLabel");
const Employee_1 = __importDefault(require("../../models/Employee"));
const MobileUserToken_1 = __importDefault(require("../../models/MobileUserToken"));
const userResolver = {
    Query: {
        getUsersPagination: async (_root, { page, limit, keyword }) => {
            try {
                const options = {
                    page: page || 1,
                    limit: limit || 10,
                    customLabels: paginationLabel_1.paginationLabel,
                    pagination: true,
                };
                const query = {
                    $and: [
                        {
                            $expr: {
                                $regexMatch: {
                                    input: { $concat: ['$lastName', ' ', '$firstName', '$latinName'] },
                                    regex: keyword,
                                    options: 'i',
                                }
                            }
                        },
                        { role: { $in: ["superAdmin", "admin", "head"] } }
                    ]
                };
                const getEmployees = await Employee_1.default.paginate(query, options);
                return getEmployees;
            }
            catch (error) {
                return error;
            }
        },
        getUserLogin: async (_root, {}, { req }) => {
            try {
                const auchCheck = await (0, AuchCheck_1.default)(req);
                if (!auchCheck.status) {
                    return new Error(auchCheck.message);
                }
                const getUserData = await Employee_1.default.findById(auchCheck?.user?.user_id);
                if (getUserData) {
                    return {
                        user: getUserData,
                        status: auchCheck?.status,
                        message: auchCheck?.message,
                    };
                }
            }
            catch (error) {
                return error;
            }
        },
        getUserMobileLogin: async (_root, { token }, { req }) => {
            try {
                const auchCheck = await (0, AuchCheck_1.default)(req);
                if (!auchCheck.status) {
                    return new Error(auchCheck.message);
                }
                const getUserData = await Employee_1.default.findById(auchCheck?.user?.user_id);
                if (getUserData && getUserData?.workingStatus === "working") {
                    const isTokeDuplicate = await MobileUserToken_1.default.find({ token });
                    if (isTokeDuplicate.length === 0) {
                        await new MobileUserToken_1.default({
                            token,
                            user: auchCheck.user.user_id
                        }).save();
                    }
                    return {
                        user: getUserData,
                        status: auchCheck?.status,
                        message: auchCheck?.message,
                    };
                }
            }
            catch (error) {
                return error;
            }
        }
    },
    Mutation: {
        addUser: async (_root, { employeeId, role }) => {
            try {
                const addUser = await Employee_1.default.findByIdAndUpdate(employeeId, { role }).exec();
                if (addUser) {
                    return (0, MessageRespone_1.default)(true);
                }
                else {
                    return (0, MessageRespone_1.default)(false);
                }
            }
            catch (error) {
                return error;
            }
        },
        removeUser: async (_root, { employeeId }) => {
            try {
                const addUser = await Employee_1.default.findByIdAndUpdate(employeeId, { role: "employee" }).exec();
                if (addUser) {
                    return (0, MessageRespone_1.default)(true);
                }
                else {
                    return (0, MessageRespone_1.default)(false);
                }
            }
            catch (error) {
                return error;
            }
        },
        mobileLogin: async (_root, { email, password }) => {
            try {
                const login = await AuthAdmin_1.default.login(email, password);
                if (login?.status) {
                    const getUserData = await Employee_1.default.findById(login?.user?.user_id);
                    console.log(getUserData);
                    if (getUserData && getUserData?.workingStatus === "working") {
                        return {
                            user: getUserData,
                            token: login?.token,
                            status: login?.status,
                            message: login?.message,
                        };
                    }
                    else {
                        return {
                            user: null,
                            token: null,
                            status: false,
                            message: "Permission Required 🚫 Contact Admin for Assistance."
                        };
                    }
                }
                else {
                    return {
                        user: null,
                        status: login?.status,
                        message: login?.message,
                    };
                }
            }
            catch (error) {
                return error;
            }
        },
        systemLogin: async (_root, { email, password }) => {
            try {
                const userRole = ["superAdmin", "admin", "head"];
                const login = await AuthAdmin_1.default.login(email, password);
                if (login?.status) {
                    const getUserData = await Employee_1.default.findById(login?.user?.user_id);
                    const checkRole = userRole.find(role => role === getUserData?.role);
                    if (checkRole) {
                        return {
                            user: getUserData,
                            token: login?.token,
                            status: login?.status,
                            message: login?.message,
                        };
                    }
                    else {
                        return {
                            user: null,
                            status: false,
                            message: "Permission Required 🚫 Contact Admin for Assistance.",
                        };
                    }
                }
                else {
                    return {
                        user: null,
                        status: login?.status,
                        message: login?.message,
                    };
                }
            }
            catch (error) {
                return error;
            }
        }
    }
};
exports.default = userResolver;
