import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    age: Number,
    gender: {
        type: String,
        enum: ['male', 'female'],
    },
    confirmemail: {
        type: Boolean,
        required: false,
    }
}, {
    timestamps: true
});

const UserModel = model('User', UserSchema);
export default UserModel;
