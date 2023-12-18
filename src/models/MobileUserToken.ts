import mongoose, { Schema, model } from "mongoose"
import paginate from 'mongoose-paginate-v2'
import { iMobileUserToken } from "../interface/iMobileUserToken"

const MobileUserTokenSchema = new Schema<iMobileUserToken>({
    token: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "employees"
    },
    createdAt: { type: Date, default: Date.now }
})

MobileUserTokenSchema.plugin(paginate)
const MobileUserToken = model<iMobileUserToken, mongoose.PaginateModel<iMobileUserToken>>('mobileUserTokens', MobileUserTokenSchema)
export default MobileUserToken