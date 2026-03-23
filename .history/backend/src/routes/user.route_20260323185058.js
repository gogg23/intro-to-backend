import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
const router = Router();

router.pt("/register", registerUser);

export default router;

