import mongoose from "mongoose";
const sginInSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
})

const SginIn = mongoose.model('SginIn', sginInSchema)
export default SginIn
