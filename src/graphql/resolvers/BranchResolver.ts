import MessageRespone from "../../fn/MessageRespone";
import { paginationLabel } from "../../fn/paginationLabel";
import { Affair, Branch, Office, Position, PublicHoliday, Section } from "../../models/Branch";

const BranchResolver = {
    Query: {
        //  Branch
        getBranchs: async (_root: undefined, { keyword }: { keyword: string }) => {
            try {
                const branchs = await Branch.find({ branchName: { $regex: keyword, $options: "i" } })
                return branchs
            } catch (error) {
                return error
            }
        },

        //  Affair
        getAffairs: async (_root: undefined, { keyword }: { keyword: string }) => {
            try {
                const affairs = await Affair.find({ affairName: { $regex: keyword, $options: "i" } })
                return affairs
            } catch (error) {
                return error
            }
        },

        //  Office
        getOffices: async (_root: undefined, { keyword }: { keyword: string }) => {
            try {
                const offices = await Office.find({ officeName: { $regex: keyword, $options: "i" } })
                return offices
            } catch (error) {
                return error
            }
        },

        //  Section
        getSections: async (_root: undefined, { keyword }: { keyword: string }) => {
            try {
                const sections = await Section.find({ sectionName: { $regex: keyword, $options: "i" } })
                return sections
            } catch (error) {
                return error
            }
        },

        //  Position
        getPositionsPagination: async (_root: undefined, { page, limit, keyword }:
            { page: number, limit: number, keyword: string }) => {
            try {
                const options = {
                    page: page || 1,
                    limit: limit || 10,
                    customLabels: paginationLabel,
                    pagination: true,
                };

                const query = {
                    position: { $regex: keyword, $options: "i" }
                };

                const getPositions = await Position.paginate(query, options);
                return getPositions;
            } catch (error) {
                return error
            }
        },
        getPublicHolidays: async (_root: undefined) => {
            try {
                const phs = await PublicHoliday.find().exec()
                return phs
            } catch (error) {
                return error
            }
        }
    },
    Mutation: {
        // Branch
        createBranch: async (_root: undefined, { branchName, longitude, latitude }: { branchName: string, longitude: string, latitude: string }) => {
            try {
                const add = await new Branch({ branchName, longitude, latitude }).save();
                if (add) {
                    return {
                        message: "Success!",
                        status: true
                    }
                }
            } catch (error) {
                return error
            }
        },
        updateBranch: async (_root: undefined, { _id, branchName, longitude, latitude }: { _id: string, branchName: string, longitude: string, latitude: string }) => {
            try {
                const udpate = await Branch.findByIdAndUpdate(_id, { branchName, longitude, latitude })
                if (udpate) {
                    return {
                        message: "Success!",
                        status: true
                    }
                } else {
                    return {
                        message: "Fail!",
                        status: false
                    }
                }
            } catch (error) {
                return error
            }
        },
        deleteBranch: async (_root: undefined, { _id, }: { _id: string }) => {
            try {
                const del = await Branch.findByIdAndDelete(_id)
                if (del) {
                    return {
                        message: "Success!",
                        status: true
                    }
                } else {
                    return {
                        message: "Fail!",
                        status: false
                    }
                }
            } catch (error) {
                return error
            }
        },

        // Affair
        createAffair: async (_root: undefined, { affairName }: { affairName: string }) => {
            try {
                const add = await new Affair({ affairName }).save();
                if (add) {
                    return {
                        message: "Success!",
                        status: true
                    }
                }
            } catch (error) {
                return error
            }
        },
        updateAffair: async (_root: undefined, { _id, affairName }: { _id: string, affairName: string }) => {
            try {
                const udpate = await Affair.findByIdAndUpdate(_id, { affairName })
                if (udpate) {
                    return {
                        message: "Success!",
                        status: true
                    }
                } else {
                    return {
                        message: "Fail!",
                        status: false
                    }
                }
            } catch (error) {
                return error
            }
        },
        deleteAffair: async (_root: undefined, { _id, }: { _id: string }) => {
            try {
                const del = await Affair.findByIdAndDelete(_id)
                if (del) {
                    return {
                        message: "Success!",
                        status: true
                    }
                } else {
                    return {
                        message: "Fail!",
                        status: false
                    }
                }
            } catch (error) {
                return error
            }
        },

        // Office
        createOffice: async (_root: undefined, { officeName }: { officeName: string }) => {
            try {
                const add = await new Office({ officeName: officeName }).save();
                if (add) {
                    return {
                        message: "Success!",
                        status: true
                    }
                }
            } catch (error) {
                return error
            }
        },
        updateOffice: async (_root: undefined, { _id, officeName }: { _id: string, officeName: string }) => {
            try {
                const udpate = await Office.findByIdAndUpdate(_id, { officeName })
                if (udpate) {
                    return {
                        message: "Success!",
                        status: true
                    }
                } else {
                    return {
                        message: "Fail!",
                        status: false
                    }
                }
            } catch (error) {
                return error
            }
        },
        deleteOffice: async (_root: undefined, { _id, }: { _id: string }) => {
            try {
                const del = await Office.findByIdAndDelete(_id)
                if (del) {
                    return {
                        message: "Success!",
                        status: true
                    }
                } else {
                    return {
                        message: "Fail!",
                        status: false
                    }
                }
            } catch (error) {
                return error
            }
        },

        // Section
        createSection: async (_root: undefined, { sectionName }: { sectionName: string }) => {
            try {
                const add = await new Section({ sectionName }).save();
                if (add) {
                    return {
                        message: "Success!",
                        status: true
                    }
                }
            } catch (error) {
                return error
            }
        },
        updateSection: async (_root: undefined, { _id, sectionName }: { _id: string, sectionName: string }) => {
            try {
                const udpate = await Section.findByIdAndUpdate(_id, { sectionName })
                if (udpate) {
                    return {
                        message: "Success!",
                        status: true
                    }
                } else {
                    return {
                        message: "Fail!",
                        status: false
                    }
                }
            } catch (error) {
                return error
            }
        },
        deleteSection: async (_root: undefined, { _id, }: { _id: string }) => {
            try {
                const del = await Section.findByIdAndDelete(_id)
                if (del) {
                    return {
                        message: "Success!",
                        status: true
                    }
                } else {
                    return {
                        message: "Fail!",
                        status: false
                    }
                }
            } catch (error) {
                return error
            }
        },

        // Position
        createPosition: async (_root: undefined, { position }: { position: string }) => {
            try {
                const add = await new Position({ position }).save()
                if (add) {
                    return MessageRespone(true)
                }
            } catch (error) {
                return error
            }
        },
        updatePosition: async (_root: undefined, { _id, position }: { _id: string, position: string }) => {
            try {
                const add = await Position.findByIdAndUpdate(_id, { position });
                if (add) {
                    return MessageRespone(true)
                } else {
                    return MessageRespone(false)
                }
            } catch (error) {
                return error
            }
        },
        deletePosition: async (_root: undefined, { _id }: { _id: string }) => {
            try {
                const add = await Position.findByIdAndDelete(_id);
                if (add) {
                    return MessageRespone(true)
                } else {
                    return MessageRespone(false)
                }
            } catch (error) {
                return error
            }
        },

        // Public Holiday 
        createPublicHoliday: async (_root: undefined, { publicHoliday, remark }: { publicHoliday: string, remark: string }) => {
            try {
                const add = await new PublicHoliday({ publicHoliday, remark }).save();
                if (add) {
                    return MessageRespone(true)
                }
            } catch (error) {
                return error
            }
        },
        updatePublicHoliday: async (_root: undefined, { _id, publicHoliday, remark }: { _id: string, publicHoliday: string, remark: string }) => {
            try {
                const add = await PublicHoliday.findByIdAndUpdate(_id, { publicHoliday, remark });
                if (add) {
                    return MessageRespone(true)
                } else {
                    return MessageRespone(false)
                }
            } catch (error) {
                return error
            }
        },
        deletePublicHoliday: async (_root: undefined, { _id }: { _id: string }) => {
            try {
                const add = await PublicHoliday.findByIdAndDelete(_id);
                if (add) {
                    return MessageRespone(true)
                } else {
                    return MessageRespone(false)
                }
            } catch (error) {
                return error
            }
        },
    }
}

export default BranchResolver;