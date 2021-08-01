import express from "express";
const router = express.Router();
import {} from "../controllers/placeController.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/").get();

export default router;
