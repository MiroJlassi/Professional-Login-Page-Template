import express from "express";
import cors from "cors";
import userRouter from "./Routes/user.js";
import "./DB.js";

const app = express();
app.use(express.json());
app.use(cors());
// http://127.0.0.1:3000/user/
app.use("/user", userRouter);

try {
    app.listen(3000, () => {
        console.log("Connected on Port::3000.");
    });
} catch (err) {
    console.log(err);
}
