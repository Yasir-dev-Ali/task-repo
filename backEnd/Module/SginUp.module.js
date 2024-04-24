// create the module of sgin Up and sgin In
import mongoose from 'mongoose'

const sginUpSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    confirmPassword: {
        type: String,
        required: true,
        trim: true
    }
    
})

const SginUp = mongoose.model('SginUp', sginUpSchema)
