import express from "express";
const router = express.Router();
import {
  loginUser,
  registerUser,
  getUsers,
  updateUser,
  deleteUser,
  getUseInfo,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/").post(registerUser).get(protect, getUsers);
router.route("/login").post(loginUser);
router.route("/info").get(protect, getUseInfo);
router.route("/:id").put(protect, updateUser).delete(protect, deleteUser);

export default router;
