import {model, Schema} from "mongoose"
const productDetailSchema = new Schema({
    title:{
        type: String,
    }
})
export const productDetailComment = model("productDetail", productDetailSchema);