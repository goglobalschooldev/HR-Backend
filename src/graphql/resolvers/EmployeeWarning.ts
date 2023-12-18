import MessageRespone from "../../fn/MessageRespone";
import { iEmployeeWarning } from "../../interface/iEmployee";
import EmployeeWarning from "../../models/EmployeeWarning";

const EmployeeWarningResolver = {
    Query: {
        getEmployeeWarning: async (_root: undefined, { employeeId }: { employeeId: string }) => {
            try {
                const data = await EmployeeWarning.find({ employeeId })
                return data
            } catch (error) {
                return error
            }
        }
    },
    Mutation: {
        createEmployeeWarning: async (_root: undefined, { input }: { input: iEmployeeWarning }) => {
            try {
                const add = await new EmployeeWarning(input).save()
                if (add) {
                    return MessageRespone(true)
                }
            } catch (error) {
                return error
            }
        },
        updateEmployeeWarning: async (_root: undefined, { _id, input }: { _id: string, input: iEmployeeWarning }) => {
            try {
                const add = await EmployeeWarning.findByIdAndUpdate(_id, input)
                if (add) {
                    return MessageRespone(true)
                } else {
                    return MessageRespone(false)
                }
            } catch (error) {
                return error
            }
        },
        deleteEmployeeWarning: async (_root: undefined, { _id }: { _id: string }) => {
            try {
                const add = await EmployeeWarning.findByIdAndDelete(_id)
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

export default EmployeeWarningResolver;