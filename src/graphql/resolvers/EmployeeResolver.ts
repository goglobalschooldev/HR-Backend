import mongoose, { mongo } from "mongoose";
import MessageRespone from "../../fn/MessageRespone";
import { paginationLabel } from "../../fn/paginationLabel";
import { iEmployee } from "../../interface/iEmployee";
import { WrokingTime } from "../../models/Branch";
import Employee from "../../models/Employee";
import EmployeePublicHoliday from "../../models/EmployeePublicHoliday";

const EmployeeResolver = {
    Query: {
        getEmployeesPagination: async (_root: undefined, { page, limit, keyword, workingStatus }: { page: number, limit: number, keyword: string, workingStatus: string }) => {
            try {
                const options = {
                    page: page || 1,
                    limit: limit || 10,
                    customLabels: paginationLabel,
                    pagination: true,
                    populate: "branch"
                };
                const workingStatusQuery = workingStatus === "All" ? {} : { workingStatus }
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

                const getEmployees: any = await Employee.paginate(query, options);
                const datas = getEmployees.data.map((data: iEmployee) => {
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
                    }
                })
                return {
                    data: datas,
                    paginator: getEmployees?.paginator
                }
            } catch (error) {
                return error
            }
        },
        getEmployeeWorkingTime: async (_root: undefined, { employeeId }: { employeeId: string }) => {
            try {
                const getWoring = await WrokingTime.find({ employeeId: new mongoose.Types.ObjectId(employeeId) });
                return getWoring
            } catch (error) {
                return error
            }
        },
        getEmployeesForSelect: async (_root: undefined) => {
            try {
                const emps = await Employee.find()
                return emps
            } catch (error) {
                return error
            }
        },
        getEmployeeById: async (_root: undefined, { _id }: { _id: string }) => {
            try {
                const getEmployee = await Employee.findById(_id);
                return getEmployee;
            } catch (error) {
                return error
            }
        },
        getPublicHolidayByEmployee: async (_root: undefined, { employeeId }: { employeeId: string }) => {
            try {
                const employees = await EmployeePublicHoliday.find({ employeeId }).populate("title")
                const datas = employees.map(emp => {
                    return {
                        _id: emp?._id,
                        title: emp?.title?.publicHoliday,
                        titleId: emp?.title?._id,
                        totalDay: emp?.totalDay,
                        year: emp?.year,
                        status: emp?.status
                    }
                })
                return datas
            } catch (error) {
                return error
            }
        },
        getEmployeeInfo: async (_root: undefined, { employeeId }: { employeeId: string }) => {
            try {
                const getEmployee = await Employee.findById(employeeId);
                return getEmployee;
            } catch (error) {
                return error
            }
        },
        getEmployeesForUserPagination: async (_root: undefined, { page, limit, keyword, _id }: { page: number, limit: number, keyword: string, _id: string }) => {
            try {
                const options = {
                    page: page || 1,
                    limit: limit || 10,
                    customLabels: paginationLabel,
                    pagination: true,
                    populate: "branch"
                };
                const _idQuery = _id.length === 0 ? {} : { _id: { $in: _id } }
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

                const getEmployees: any = await Employee.paginate(query, options);
                const datas = getEmployees.data.map((data: iEmployee) => {
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
                    }
                });

                return {
                    data: datas,
                    paginator: getEmployees?.paginator
                }
            } catch (error) {
                return error
            }
        },
        getEmployees: async (_root: undefined, { keyword }: { keyword: string }) => {
            try {


                const getEmployees = await Employee.find({
                    $expr: {
                        $regexMatch: {
                            input: { $concat: ['$lastName', ' ', '$firstName', '$latinName'] },
                            regex: keyword,
                            options: 'i',
                        }
                    }
                });

                return getEmployees
            } catch (error) {
                return error
            }
        },
    },
    Mutation: {
        createEmployee: async (_root: undefined, { input }: { input: iEmployee }) => {
            try {
                const add = await new Employee({
                    _id: new mongoose.Types.ObjectId(),
                    ...input
                }).save()
                console.log(add);
                if (add) {
                    return MessageRespone(true)
                } else {
                    return MessageRespone(false)
                }
            } catch (error) {
                return error
            }
        },
        updateEmployee: async (_root: undefined, { _id, input }: { _id: string, input: iEmployee }) => {
            try {
                const udpate = await Employee.findByIdAndUpdate(_id, input).exec()
                if (udpate) {
                    return MessageRespone(true)
                } else {
                    return MessageRespone(false)
                }
            } catch (error) {
                return error
            }
        },
        deleteEmployee: async (_root: undefined, { _id }: { _id: string }) => {
            try {
                const deleteData = await Employee.findByIdAndDelete(_id).exec()
                if (deleteData) {
                    return MessageRespone(true)
                } else {
                    return MessageRespone(false)
                }
            } catch (error) {
                return error
            }
        },
        updateWorkingStatus: async (_root: undefined, { _id, workingStatus }: { _id: string, workingStatus: string }) => {
            try {
                const getEmployee = await Employee.findByIdAndUpdate(_id, { workingStatus });
                if (getEmployee) {
                    return MessageRespone(true);
                }
                else {
                    return MessageRespone(false)
                }
            } catch (error) {
                return error
            }
        },
        addEmployeeWorkingTime: async (_root: undefined, { employeeId, shiftName, start, end }: { employeeId: string, shiftName: string, start: string, end: string }) => {
            try {
                const add = await new WrokingTime({ employeeId, shiftName, start, end }).save();
                if (add) {
                    return MessageRespone(true)
                }
            } catch (error) {
                return error
            }
        },
        updateEmployeeWorkingTime: async (_root: undefined, { _id, employeeId, shiftName, start, end }: { _id: string, employeeId: string, shiftName: string, start: string, end: string }) => {
            try {
                const add = await WrokingTime.findByIdAndUpdate(_id, { employeeId, shiftName, start, end })
                if (add) {
                    return MessageRespone(true)
                } else {
                    return MessageRespone(false)
                }
            } catch (error) {
                return error
            }
        },
        deleteEmployeeWorkingTime: async (_root: undefined, { _id }: { _id: string }) => {
            try {
                const del = await WrokingTime.findByIdAndDelete(_id).exec()
                if (del) {
                    return MessageRespone(true)
                } else {
                    return MessageRespone(false)
                }
            } catch (error) {
                return error
            }
        },
        addPublicHolidayByEmployee: async (_root: undefined, { employeeId, title, totalDay, year }: { employeeId: string, title: string, totalDay: number, year: string }) => {
            try {
                const add = await new EmployeePublicHoliday({ employeeId, title, totalDay, year }).save();
                if (add) {
                    return MessageRespone(true)
                }
            } catch (error) {
                return error
            }
        },
        updatePublicHolidayByEmployee: async (_root: undefined, { _id, employeeId, title, totalDay, year }: { _id: string, employeeId: string, title: string, totalDay: number, year: string }) => {
            try {
                const update = await EmployeePublicHoliday.findByIdAndUpdate(_id, { employeeId, title, totalDay, year })
                if (update) {
                    return MessageRespone(true)
                } else {
                    return MessageRespone(false)
                }
            } catch (error) {
                return error
            }
        },
        deletePublicHolidayByEmployee: async (_root: undefined, { _id }: { _id: string }) => {
            try {
                const update = await EmployeePublicHoliday.findByIdAndDelete(_id)
                if (update) {
                    return MessageRespone(true)
                } else {
                    return MessageRespone(false)
                }
            } catch (error) {
                return error
            }
        },
        updatePublicHolidayStatus: async (_root: undefined, { _id, status }: { _id: string, status: Boolean }) => {
            try {
                const update = await EmployeePublicHoliday.findByIdAndUpdate(_id, { status })
                if (update) {
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
export default EmployeeResolver;