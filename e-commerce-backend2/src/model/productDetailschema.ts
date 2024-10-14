import {model, Schema} from "mongoose"
const productDetailSchema = new Schema({
    title:{
        type: String,
        required: true,
    }
})
export const productDetailComment = model("productDetail", productDetailSchema);
      

