import express from "express";
const router = express.Router();
import { getPlaces } from "../controllers/placeController.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/").get(protect, getPlaces);

export default router;
