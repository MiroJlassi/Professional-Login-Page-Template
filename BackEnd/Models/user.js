import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    Name: {
        type: String
    },
    LastName: {
        type: String
    },
    Email: {
        type: String
    },
    Password: {
        type: String
    },
});

const User = mongoose.model('User', userSchema);

export default User;
