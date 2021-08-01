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

router
  .route("/")
  .get(protect, admin, getPlaces)
  .post(protect, admin, createPlace);
router.route("/:id/keyword").put(protect, admin, addKeyword);
router
  .route("/:id")
  .get(protect, admin, getPlace)
  .put(protect, admin, updatePlace)
  .delete(protect, admin, deletePlace);

export default router;
