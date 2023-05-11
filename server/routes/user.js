import express from "express";
import {
  getmyProfile,
  register,
  login,
  logout,
  uploadResume,
} from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/me", isAuthenticated, getmyProfile);
router.put("/uploadresume", isAuthenticated, uploadResume);

export default router;
