import mongoose from 'mongoose';
const authSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    education: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    token: {
        type: String
    },
},
    {
        timestamps: true
    })
const myAuth = mongoose.model('Registration', authSchema);
export default myAuth;