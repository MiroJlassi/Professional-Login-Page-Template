import User from "../Models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const GetUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        console.log(err);
        res.status(400).json("ERROR: Cannot Get");
    }
};

const AddUser = async (req, res) => {
    try {
        const data = req.body;
        const NewUser = new User(data);

        // Password hashing
        const salt = bcrypt.genSaltSync(10);
        const cryptedpass = await bcrypt.hashSync(data.Password, salt);
        NewUser.Password = cryptedpass;

        const savedUser = await NewUser.save();
        res.send(savedUser);
    } catch (err) {
        console.log(err);
        res.status(400).json("ERROR: Cannot Add");
    }
};

const Login = async (req, res) => {
    try {
        const data = req.body; // data = { email, Password }
        //console.log("Login data received:", data);  // Debugging statement
        const user = await User.findOne({ Email: data.Email });
        //console.log(user);
        if (!user) {
            //console.log("User not found with email:", data.Email);  // Debugging statement
            return res.status(404).send("User not Found..");
        } else {
            // Decrypt password
            const validPass = bcrypt.compareSync(data.Password, user.Password);
            if (!validPass) {
                //console.log("Invalid password for user:", user.Email);  // Debugging statement
                return res.status(401).send("Invalid Inputs..");
            } else {
                // Authentication
                const payload = {
                    name: user.Name,
                    email: user.Email
                };
                const token = jwt.sign(payload, "MyCoDe.");  // Added const keyword
                return res.status(200).send({ mytoken: token });
            }
        }
    } catch (err) {
        console.log(err);
        res.status(400).json("ERROR: Cannot Log");
    }
};

export default {
    AddUser,
    GetUsers,
    Login
};
