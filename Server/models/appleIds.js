import {model, Schema} from "mongoose";

const appleIds = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
})

export default model('AppleIds', appleIds)
