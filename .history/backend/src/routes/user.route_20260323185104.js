import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
const router = Router();

router.t("/register", registerUser);

export default router;

