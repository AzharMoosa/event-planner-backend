import express from "express";
const router = express.Router();
import { getPlaces } from "../controllers/placeController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(protect, admin, getPlaces);

export default router;
