import express from "express";
const router = express.Router();
import {
  getPlaces,
  getPlace,
  createPlace,
  updatePlace,
  addKeyword,
  deletePlace,
} from "../controllers/placeController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(protect, admin, getPlaces);

export default router;
