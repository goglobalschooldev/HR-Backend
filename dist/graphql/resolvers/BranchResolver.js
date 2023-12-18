"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MessageRespone_1 = __importDefault(require("../../fn/MessageRespone"));
const paginationLabel_1 = require("../../fn/paginationLabel");
const Branch_1 = require("../../models/Branch");
const BranchResolver = {
    Query: {
        getBranchs: async (_root, { keyword }) => {
            try {
                const branchs = await Branch_1.Branch.find({ branchName: { $regex: keyword, $options: "i" } });
                return branchs;
            }
            catch (error) {
                return error;
            }
        },
        getAffairs: async (_root, { keyword }) => {
            try {
                const affairs = await Branch_1.Affair.find({ affairName: { $regex: keyword, $options: "i" } });
                return affairs;
            }
            catch (error) {
                return error;
            }
        },
        getOffices: async (_root, { keyword }) => {
            try {
                const offices = await Branch_1.Office.find({ officeName: { $regex: keyword, $options: "i" } });
                return offices;
            }
            catch (error) {
                return error;
            }
        },
        getSections: async (_root, { keyword }) => {
            try {
                const sections = await Branch_1.Section.find({ sectionName: { $regex: keyword, $options: "i" } });
                return sections;
            }
            catch (error) {
                return error;
            }
        },
        getPositionsPagination: async (_root, { page, limit, keyword }) => {
            try {
                const options = {
                    page: page || 1,
                    limit: limit || 10,
                    customLabels: paginationLabel_1.paginationLabel,
                    pagination: true,
                };
                const query = {
                    position: { $regex: keyword, $options: "i" }
                };
                const getPositions = await Branch_1.Position.paginate(query, options);
                return getPositions;
            }
            catch (error) {
                return error;
            }
        },
        getPublicHolidays: async (_root) => {
            try {
                const phs = await Branch_1.PublicHoliday.find().exec();
                return phs;
            }
            catch (error) {
                return error;
            }
        }
    },
    Mutation: {
        createBranch: async (_root, { branchName, longitude, latitude }) => {
            try {
                const add = await new Branch_1.Branch({ branchName, longitude, latitude }).save();
                if (add) {
                    return {
                        message: "Success!",
                        status: true
                    };
                }
            }
            catch (error) {
                return error;
            }
        },
        updateBranch: async (_root, { _id, branchName, longitude, latitude }) => {
            try {
                const udpate = await Branch_1.Branch.findByIdAndUpdate(_id, { branchName, longitude, latitude });
                if (udpate) {
                    return {
                        message: "Success!",
                        status: true
                    };
                }
                else {
                    return {
                        message: "Fail!",
                        status: false
                    };
                }
            }
            catch (error) {
                return error;
            }
        },
        deleteBranch: async (_root, { _id, }) => {
            try {
                const del = await Branch_1.Branch.findByIdAndDelete(_id);
                if (del) {
                    return {
                        message: "Success!",
                        status: true
                    };
                }
                else {
                    return {
                        message: "Fail!",
                        status: false
                    };
                }
            }
            catch (error) {
                return error;
            }
        },
        createAffair: async (_root, { affairName }) => {
            try {
                const add = await new Branch_1.Affair({ affairName }).save();
                if (add) {
                    return {
                        message: "Success!",
                        status: true
                    };
                }
            }
            catch (error) {
                return error;
            }
        },
        updateAffair: async (_root, { _id, affairName }) => {
            try {
                const udpate = await Branch_1.Affair.findByIdAndUpdate(_id, { affairName });
                if (udpate) {
                    return {
                        message: "Success!",
                        status: true
                    };
                }
                else {
                    return {
                        message: "Fail!",
                        status: false
                    };
                }
            }
            catch (error) {
                return error;
            }
        },
        deleteAffair: async (_root, { _id, }) => {
            try {
                const del = await Branch_1.Affair.findByIdAndDelete(_id);
                if (del) {
                    return {
                        message: "Success!",
                        status: true
                    };
                }
                else {
                    return {
                        message: "Fail!",
                        status: false
                    };
                }
            }
            catch (error) {
                return error;
            }
        },
        createOffice: async (_root, { officeName }) => {
            try {
                const add = await new Branch_1.Office({ officeName: officeName }).save();
                if (add) {
                    return {
                        message: "Success!",
                        status: true
                    };
                }
            }
            catch (error) {
                return error;
            }
        },
        updateOffice: async (_root, { _id, officeName }) => {
            try {
                const udpate = await Branch_1.Office.findByIdAndUpdate(_id, { officeName });
                if (udpate) {
                    return {
                        message: "Success!",
                        status: true
                    };
                }
                else {
                    return {
                        message: "Fail!",
                        status: false
                    };
                }
            }
            catch (error) {
                return error;
            }
        },
        deleteOffice: async (_root, { _id, }) => {
            try {
                const del = await Branch_1.Office.findByIdAndDelete(_id);
                if (del) {
                    return {
                        message: "Success!",
                        status: true
                    };
                }
                else {
                    return {
                        message: "Fail!",
                        status: false
                    };
                }
            }
            catch (error) {
                return error;
            }
        },
        createSection: async (_root, { sectionName }) => {
            try {
                const add = await new Branch_1.Section({ sectionName }).save();
                if (add) {
                    return {
                        message: "Success!",
                        status: true
                    };
                }
            }
            catch (error) {
                return error;
            }
        },
        updateSection: async (_root, { _id, sectionName }) => {
            try {
                const udpate = await Branch_1.Section.findByIdAndUpdate(_id, { sectionName });
                if (udpate) {
                    return {
                        message: "Success!",
                        status: true
                    };
                }
                else {
                    return {
                        message: "Fail!",
                        status: false
                    };
                }
            }
            catch (error) {
                return error;
            }
        },
        deleteSection: async (_root, { _id, }) => {
            try {
                const del = await Branch_1.Section.findByIdAndDelete(_id);
                if (del) {
                    return {
                        message: "Success!",
                        status: true
                    };
                }
                else {
                    return {
                        message: "Fail!",
                        status: false
                    };
                }
            }
            catch (error) {
                return error;
            }
        },
        createPosition: async (_root, { position }) => {
            try {
                const add = await new Branch_1.Position({ position }).save();
                if (add) {
                    return (0, MessageRespone_1.default)(true);
                }
            }
            catch (error) {
                return error;
            }
        },
        updatePosition: async (_root, { _id, position }) => {
            try {
                const add = await Branch_1.Position.findByIdAndUpdate(_id, { position });
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
        deletePosition: async (_root, { _id }) => {
            try {
                const add = await Branch_1.Position.findByIdAndDelete(_id);
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
        createPublicHoliday: async (_root, { publicHoliday, remark }) => {
            try {
                const add = await new Branch_1.PublicHoliday({ publicHoliday, remark }).save();
                if (add) {
                    return (0, MessageRespone_1.default)(true);
                }
            }
            catch (error) {
                return error;
            }
        },
        updatePublicHoliday: async (_root, { _id, publicHoliday, remark }) => {
            try {
                const add = await Branch_1.PublicHoliday.findByIdAndUpdate(_id, { publicHoliday, remark });
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
        deletePublicHoliday: async (_root, { _id }) => {
            try {
                const add = await Branch_1.PublicHoliday.findByIdAndDelete(_id);
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
    }
};
exports.default = BranchResolver;
