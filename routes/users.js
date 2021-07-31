import express from "express";
const router = express.Router();
import {
  loginUser,
  registerUser,
  getUsers,
  updateUser,
  deleteUser,
  getUserByID,
} from "../controllers/userController.js";

router.route("/").post(registerUser).get(getUsers);
router.route("/login").post(loginUser);
router.route("/login").post(loginUser);
router.route("/:id").get(getUserByID).put(updateUser).delete(deleteUser);

export default router;
