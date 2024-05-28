import mongoose from "mongoose";

try {
    mongoose.connect("mongodb://127.0.0.1:27017/login");
    console.log("DB connected...");
} catch (err) {
    console.log(err);
}

export default mongoose;
