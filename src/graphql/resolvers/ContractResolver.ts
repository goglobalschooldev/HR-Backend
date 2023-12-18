import MessageRespone from "../../fn/MessageRespone";
import { iContract } from "../../interface/iContract";
import { ContactType, Contract } from "../../models/Contract";

const ContractResolver = {
    Query: {
        getContractsType: async (_root: undefined) => {
            try {
                const getType = await ContactType.find();
                return getType
            } catch (error) {
                return error
            }
        },
        getContracts: async (_root: undefined, { employeeId }: { employeeId: string }) => {
            try {
                const contact = await Contract.find({ employeeId }).populate("contractTitle position").exec();
                const data = contact.map((con: iContract) => {
                    return {
                        _id: con?._id,
                        contractTitle: con?.contractTitle?.title,
                        position: con?.position?.position,
                        startDate: con?.startDate,
                        endDate: con?.endDate,
                        status: con?.status
                    }
                });
                return data;
            } catch (error) {
                return error
            }
        }
    },
    Mutation: {
        createContractType: async (_root: undefined, { title }: { title: string }) => {
            try {
                const add = await new ContactType({ title }).save();
                if (add) {
                    return MessageRespone(true)
                }
            } catch (error) {
                return error
            }
        },
        updateContractType: async (_root: undefined, { _id, title }: { _id: string, title: string }) => {
            try {
                const update = await ContactType.findByIdAndUpdate(_id, { title })
                if (update) {
                    return MessageRespone(true)
                } else {
                    return MessageRespone(false)
                }
            } catch (error) {
                return error
            }
        },
        deleteContractType: async (_root: undefined, { _id }: { _id: string }) => {
            try {
                const del = await ContactType.findByIdAndDelete(_id).exec();
                if (del) {
                    return MessageRespone(true);
                } else {
                    return MessageRespone(false)
                }
            } catch (error) {
                return error
            }
        },

        addContract: async (_root: undefined, { input }: { input: iContract }) => {  
            try {
                const add = await new Contract(input).save();
                if (add) {
                    return MessageRespone(true)
                }
            } catch (error) {
                return error
            }
        },
        updateContractStatus: async (_root: undefined, { _id, status }: { _id: string, status: Boolean }) => {
            try {
                const update = await Contract.findByIdAndUpdate(_id, { status });
                if (update) {
                    await Contract.updateMany({ employeeId: update?.employeeId, _id: { $ne: update?._id } }, { status: !status })
                    return MessageRespone(true)
                } else {
                    return MessageRespone(false)
                }
            } catch (error) {
                return error
            }
        },
        deleteContract: async (_root: undefined, { _id }: { _id: string }) => {
            try {
                const del = await Contract.findByIdAndDelete(_id);
                if (del) {
                    return MessageRespone(true)
                } else {
                    return MessageRespone(false)
                }
            } catch (error) {
                return error
            }
        }
    }
}
export default ContractResolver;