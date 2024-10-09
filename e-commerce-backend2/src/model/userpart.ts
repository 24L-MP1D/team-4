import { model, Schema } from "mongoose";

const userPartSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
    gmail: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
})

export const userPart = model("userParts", userPartSchema)