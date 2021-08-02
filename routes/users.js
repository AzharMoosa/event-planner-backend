import express from "express";
const router = express.Router();
import {
  loginUser,
  registerUser,
  getUsers,
  getUserInfo,
  updateUser,
  deleteUser,
  getUserEvents,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/").post(registerUser).get(protect, getUsers);
router.route("/login").post(loginUser);
router.route("/info").get(protect, getUserInfo);
router.route("/events").get(protect, getUserEvents);
router.route("/:id").put(protect, updateUser).delete(protect, deleteUser);

export default router;
