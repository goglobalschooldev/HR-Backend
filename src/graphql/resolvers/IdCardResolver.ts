import mongoose from "mongoose"
import Employee from "../../models/Employee"
import MessageRespone from "../../fn/MessageRespone"
import { Contract } from "../../models/Contract";

const IdCardResolver = {
    Query: {
        getEmployeeIdCard: async (_root: undefined, { employeeId }: { employeeId: string }) => {
            try {
                const getEmp = await Employee.findById(employeeId);
                const getContract = await Contract.findOne({ employeeId: new mongoose.Types.ObjectId(employeeId), status: false }).populate("position")
                return {
                    profileImage: getEmp?.profileImage,
                    firstName: getEmp?.firstName,
                    lastName: getEmp?.lastName,
                    latinName: getEmp?.latinName,
                    position: getContract?.position?.position,
                    QRCode: getEmp?.idCard,
                }
            } catch (error) {
                return error
            }
        }
    },
    Mutation: {
        generateEmployeeQRCode: async (_root: undefined, { employeeId }: { employeeId: string }) => {
            try {
                const newQr = new mongoose.Types.ObjectId()
                const getEmp = await Employee.findByIdAndUpdate(employeeId, { idCard: newQr });
                if (getEmp) {
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
export default IdCardResolver