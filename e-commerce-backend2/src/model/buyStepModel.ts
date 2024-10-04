import { model, Schema } from "mongoose";

const buyStepTwoSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    homeAddress: {
        type: String,
        required: true,
    },
    nemeltMedeelel: {
        type: String,
        required: true,
    }
})

export const buyStep = model("buyStepTwo", buyStepTwoSchema)