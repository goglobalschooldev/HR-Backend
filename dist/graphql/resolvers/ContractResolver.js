"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MessageRespone_1 = __importDefault(require("../../fn/MessageRespone"));
const Contract_1 = require("../../models/Contract");
const ContractResolver = {
    Query: {
        getContractsType: async (_root) => {
            try {
                const getType = await Contract_1.ContactType.find();
                return getType;
            }
            catch (error) {
                return error;
            }
        },
        getContracts: async (_root, { employeeId }) => {
            try {
                const contact = await Contract_1.Contract.find({ employeeId }).populate("contractTitle position").exec();
                const data = contact.map((con) => {
                    return {
                        _id: con?._id,
                        contractTitle: con?.contractTitle?.title,
                        position: con?.position?.position,
                        startDate: con?.startDate,
                        endDate: con?.endDate,
                        status: con?.status
                    };
                });
                return data;
            }
            catch (error) {
                return error;
            }
        }
    },
    Mutation: {
        createContractType: async (_root, { title }) => {
            try {
                const add = await new Contract_1.ContactType({ title }).save();
                if (add) {
                    return (0, MessageRespone_1.default)(true);
                }
            }
            catch (error) {
                return error;
            }
        },
        updateContractType: async (_root, { _id, title }) => {
            try {
                const update = await Contract_1.ContactType.findByIdAndUpdate(_id, { title });
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
        deleteContractType: async (_root, { _id }) => {
            try {
                const del = await Contract_1.ContactType.findByIdAndDelete(_id).exec();
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
        addContract: async (_root, { input }) => {
            try {
                const add = await new Contract_1.Contract(input).save();
                if (add) {
                    return (0, MessageRespone_1.default)(true);
                }
            }
            catch (error) {
                return error;
            }
        },
        updateContractStatus: async (_root, { _id, status }) => {
            try {
                const update = await Contract_1.Contract.findByIdAndUpdate(_id, { status });
                if (update) {
                    await Contract_1.Contract.updateMany({ employeeId: update?.employeeId, _id: { $ne: update?._id } }, { status: !status });
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
        deleteContract: async (_root, { _id }) => {
            try {
                const del = await Contract_1.Contract.findByIdAndDelete(_id);
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
        }
    }
};
exports.default = ContractResolver;
