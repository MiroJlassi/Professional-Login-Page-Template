import express from "express";
import controller from "../Controllers/user.js";

const router = express.Router();

router.get("/", controller.GetUsers);
router.post("/registre", controller.AddUser);
router.post("/login", controller.Login);

export default router;
