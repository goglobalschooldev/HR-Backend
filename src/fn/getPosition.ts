import mongoose from "mongoose"
import { Contract } from "../models/Contract"

const getPosition = async (employeeId: string) => {
    try {
        const getContract = await Contract.findOne({ employeeId: new mongoose.Types.ObjectId(employeeId), status: true }).populate("position")
        return getContract?.position?.position
    } catch (error) {
        return error
    }
}

export { getPosition }