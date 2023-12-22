import AuchCheck from "../../auth/AuchCheck";
import AuthAdmin from "../../auth/AuthAdmin";
import MessageRespone from "../../fn/MessageRespone";
import { paginationLabel } from "../../fn/paginationLabel";
import Employee from "../../models/Employee";
import express from 'express';
import MobileUserToken from "../../models/MobileUserToken";

const userResolver = {
    Query: {
        getUsersPagination: async (_root: undefined, { page, limit, keyword }: { page: number, limit: number, keyword: string }) => {
            try {
                const options = {
                    page: page || 1,
                    limit: limit || 10,
                    customLabels: paginationLabel,
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

                const getEmployees = await Employee.paginate(query, options);
                return getEmployees;
            } catch (error) {
                return error
            }
        },
        getUserLogin: async (_root: undefined, { }, { req }: { req: express.Request }) => {
            try {
                const auchCheck = await AuchCheck(req)
                if (!auchCheck.status) {
                    return new Error(auchCheck.message);
                }
                const getUserData = await Employee.findById(auchCheck?.user?.user_id);
                if (getUserData) {
                    return {
                        user: getUserData,
                        status: auchCheck?.status,
                        message: auchCheck?.message,
                    }
                }
            } catch (error) {
                return error
            }
        },
        getUserMobileLogin: async (_root: undefined, { token }: { token: string }, { req }: { req: express.Request }) => {
            try {
                const auchCheck = await AuchCheck(req)
                if (!auchCheck.status) {
                    return new Error(auchCheck.message);
                }
                const getUserData = await Employee.findById(auchCheck?.user?.user_id);
                if (getUserData && getUserData?.workingStatus === "working") {

                    const isTokeDuplicate = await MobileUserToken.find({ token })
                    if (isTokeDuplicate.length === 0) {
                        await new MobileUserToken({
                            token,
                            user: auchCheck.user.user_id
                        }).save()
                    }
                    return {
                        user: getUserData,
                        status: auchCheck?.status,
                        message: auchCheck?.message,
                    }
                }
            } catch (error) {
                return error
            }
        }
    },
    Mutation: {
        addUser: async (_root: undefined, { employeeId, role }: { employeeId: string, role: string }) => {
            try {
                const addUser = await Employee.findByIdAndUpdate(employeeId, { role }).exec();
                if (addUser) {
                    return MessageRespone(true)
                } else {
                    return MessageRespone(false)
                }
            } catch (error) {
                return error
            }
        },
        removeUser: async (_root: undefined, { employeeId }: { employeeId: string }) => {
            try {
                const addUser = await Employee.findByIdAndUpdate(employeeId, { role: "employee" }).exec();
                if (addUser) {
                    return MessageRespone(true)
                } else {
                    return MessageRespone(false)
                }
            } catch (error) {
                return error
            }
        },
        mobileLogin: async (_root: undefined, { email, password }: { email: string, password: string }) => {
            try {
                const login = await AuthAdmin.login(email, password);
                if (login?.status) {
                    const getUserData = await Employee.findById(login?.user?.user_id);
                    console.log(getUserData);
                    if (getUserData && getUserData?.workingStatus === "working") {
                        return {
                            user: getUserData,
                            token: login?.token,
                            status: login?.status,
                            message: login?.message,
                        }
                    } else {
                        return {
                            user: null,
                            token: null,
                            status: false,
                            message: "Permission Required 🚫 Contact Admin for Assistance."
                        }
                    }
                } else {
                    return {
                        user: null,
                        status: login?.status,
                        message: login?.message,
                    }
                }

            } catch (error) {
                return error
            }
        },
        systemLogin: async (_root: undefined, { email, password }: { email: string, password: string }) => {
            try {
                const userRole = ["superAdmin", "admin", "head"]

                const login = await AuthAdmin.login(email, password);
                if (login?.status) {
                    const getUserData = await Employee.findById(login?.user?.user_id)
                    const checkRole = userRole.find(role => role === getUserData?.role)
                    if (checkRole) {
                        return {
                            user: getUserData,
                            token: login?.token,
                            status: login?.status,
                            message: login?.message,
                        }
                    } else {
                        return {
                            user: null,
                            status: false,
                            message: "Permission Required 🚫 Contact Admin for Assistance.",
                        }
                    }
                } else {
                    return {
                        user: null,
                        status: login?.status,
                        message: login?.message,
                    }
                }

            } catch (error) {
                return error
            }
        }
    }
}

export default userResolver;