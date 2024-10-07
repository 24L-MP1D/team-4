import { model, Schema } from "mongoose";

const buyStepTwoSchema = new Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    phoneNumber: {
        type: String,
    },
    homeAddress: {
        type: String,
    },
    nemeltMedeelel: {
        type: String,
    }


})

export const buyStep = model("buyStepTwo", buyStepTwoSchema)