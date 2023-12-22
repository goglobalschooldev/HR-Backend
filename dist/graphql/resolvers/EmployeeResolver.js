"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const MessageRespone_1 = __importDefault(require("../../fn/MessageRespone"));
const paginationLabel_1 = require("../../fn/paginationLabel");
const Branch_1 = require("../../models/Branch");
const Employee_1 = __importDefault(require("../../models/Employee"));
const EmployeePublicHoliday_1 = __importDefault(require("../../models/EmployeePublicHoliday"));
const EmployeeResolver = {
    Query: {
        getEmployeesPagination: async (_root, { page, limit, keyword, workingStatus }) => {
            try {
                const options = {
                    page: page || 1,
                    limit: limit || 10,
                    customLabels: paginationLabel_1.paginationLabel,
                    pagination: true,
                    populate: "branch"
                };
                const workingStatusQuery = workingStatus === "All" ? {} : { workingStatus };
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
                        workingStatusQuery
                    ]
                };
                const getEmployees = await Employee_1.default.paginate(query, options);
                const datas = getEmployees.data.map((data) => {
                    return {
                        _id: data?._id,
                        nationalId: data?.nationalId,
                        employeeId: data?.employeeId,
                        firstName: data?.firstName,
                        lastName: data?.lastName,
                        latinName: data?.latinName,
                        gender: data?.gender,
                        profileImage: data?.profileImage,
                        joinDate: data?.joinDate,
                        dob: data?.dob,
                        workingStatus: data?.workingStatus,
                        placeOfBirth: data?.placeOfBirth,
                        nationality: data?.nationality,
                        tell: data?.tell,
                        email: data?.email,
                        currentAddress: data?.currentAddress,
                        branch: data?.branch?.branchName,
                        branchId: data?.branch?._id,
                        marital: data?.marital,
                        workBook: data?.workBook
                    };
                });
                return {
                    data: datas,
                    paginator: getEmployees?.paginator
                };
            }
            catch (error) {
                return error;
            }
        },
        getEmployeeWorkingTime: async (_root, { employeeId }) => {
            try {
                const getWoring = await Branch_1.WrokingTime.find({ employeeId: new mongoose_1.default.Types.ObjectId(employeeId) });
                return getWoring;
            }
            catch (error) {
                return error;
            }
        },
        getEmployeesForSelect: async (_root) => {
            try {
                const emps = await Employee_1.default.find();
                return emps;
            }
            catch (error) {
                return error;
            }
        },
        getEmployeeById: async (_root, { _id }) => {
            try {
                const getEmployee = await Employee_1.default.findById(_id);
                return getEmployee;
            }
            catch (error) {
                return error;
            }
        },
        getPublicHolidayByEmployee: async (_root, { employeeId }) => {
            try {
                const employees = await EmployeePublicHoliday_1.default.find({ employeeId }).populate("title");
                const datas = employees.map(emp => {
                    return {
                        _id: emp?._id,
                        title: emp?.title?.publicHoliday,
                        titleId: emp?.title?._id,
                        totalDay: emp?.totalDay,
                        year: emp?.year,
                        status: emp?.status
                    };
                });
                return datas;
            }
            catch (error) {
                return error;
            }
        },
        getEmployeeInfo: async (_root, { employeeId }) => {
            try {
                const getEmployee = await Employee_1.default.findById(employeeId);
                return getEmployee;
            }
            catch (error) {
                return error;
            }
        },
        getEmployeesForUserPagination: async (_root, { page, limit, keyword, _id }) => {
            try {
                const options = {
                    page: page || 1,
                    limit: limit || 10,
                    customLabels: paginationLabel_1.paginationLabel,
                    pagination: true,
                    populate: "branch"
                };
                const _idQuery = _id.length === 0 ? {} : { _id: { $in: _id } };
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
                        _idQuery
                    ]
                };
                const getEmployees = await Employee_1.default.paginate(query, options);
                const datas = getEmployees.data.map((data) => {
                    return {
                        _id: data?._id,
                        nationalId: data?.nationalId,
                        employeeId: data?.employeeId,
                        firstName: data?.firstName,
                        lastName: data?.lastName,
                        latinName: data?.latinName,
                        gender: data?.gender,
                        profileImage: data?.profileImage,
                        joinDate: data?.joinDate,
                        dob: data?.dob,
                        workingStatus: data?.workingStatus,
                        placeOfBirth: data?.placeOfBirth,
                        nationality: data?.nationality,
                        tell: data?.tell,
                        email: data?.email,
                        currentAddress: data?.currentAddress,
                        branch: data?.branch?.branchName,
                        branchId: data?.branch?._id,
                        marital: data?.marital,
                        workBook: data?.workBook
                    };
                });
                return {
                    data: datas,
                    paginator: getEmployees?.paginator
                };
            }
            catch (error) {
                return error;
            }
        },
        getEmployees: async (_root, { keyword }) => {
            try {
                const getEmployees = await Employee_1.default.find({
                    $expr: {
                        $regexMatch: {
                            input: { $concat: ['$lastName', ' ', '$firstName', '$latinName'] },
                            regex: keyword,
                            options: 'i',
                        }
                    }
                });
                return getEmployees;
            }
            catch (error) {
                return error;
            }
        },
    },
    Mutation: {
        createEmployee: async (_root, { input }) => {
            try {
                const add = await new Employee_1.default({
                    _id: new mongoose_1.default.Types.ObjectId(),
                    ...input
                }).save();
                console.log(add);
                if (add) {
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
        updateEmployee: async (_root, { _id, input }) => {
            try {
                const udpate = await Employee_1.default.findByIdAndUpdate(_id, input).exec();
                if (udpate) {
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
        deleteEmployee: async (_root, { _id }) => {
            try {
                const deleteData = await Employee_1.default.findByIdAndDelete(_id).exec();
                if (deleteData) {
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
        updateWorkingStatus: async (_root, { _id, workingStatus }) => {
            try {
                const getEmployee = await Employee_1.default.findByIdAndUpdate(_id, { workingStatus });
                if (getEmployee) {
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
        addEmployeeWorkingTime: async (_root, { employeeId, shiftName, start, end }) => {
            try {
                const add = await new Branch_1.WrokingTime({ employeeId, shiftName, start, end }).save();
                if (add) {
                    return (0, MessageRespone_1.default)(true);
                }
            }
            catch (error) {
                return error;
            }
        },
        updateEmployeeWorkingTime: async (_root, { _id, employeeId, shiftName, start, end }) => {
            try {
                const add = await Branch_1.WrokingTime.findByIdAndUpdate(_id, { employeeId, shiftName, start, end });
                if (add) {
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
        deleteEmployeeWorkingTime: async (_root, { _id }) => {
            try {
                const del = await Branch_1.WrokingTime.findByIdAndDelete(_id).exec();
                if (del) {
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
        addPublicHolidayByEmployee: async (_root, { employeeId, title, totalDay, year }) => {
            try {
                const add = await new EmployeePublicHoliday_1.default({ employeeId, title, totalDay, year }).save();
                if (add) {
                    return (0, MessageRespone_1.default)(true);
                }
            }
            catch (error) {
                return error;
            }
        },
        updatePublicHolidayByEmployee: async (_root, { _id, employeeId, title, totalDay, year }) => {
            try {
                const update = await EmployeePublicHoliday_1.default.findByIdAndUpdate(_id, { employeeId, title, totalDay, year });
                if (update) {
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
        deletePublicHolidayByEmployee: async (_root, { _id }) => {
            try {
                const update = await EmployeePublicHoliday_1.default.findByIdAndDelete(_id);
                if (update) {
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
        updatePublicHolidayStatus: async (_root, { _id, status }) => {
            try {
                const update = await EmployeePublicHoliday_1.default.findByIdAndUpdate(_id, { status });
                if (update) {
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
    }
};
exports.default = EmployeeResolver;
