import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
const router = Router();

router.("/register", registerUser);

export default router;

