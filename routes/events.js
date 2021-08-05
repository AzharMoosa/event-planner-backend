import express from "express";
const router = express.Router();
import {
  getEvents,
  getEvent,
  createEvent,
  updateEvent,
  deleteEvent,
  inviteUser,
  acceptInvite,
  declineInvite,
  invitedUsers,
} from "../controllers/eventController.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/").get(protect, getEvents).post(protect, createEvent);
router.route("/:id/invited").get(protect, invitedUsers);
router.route("/:id/invite").post(protect, inviteUser);
router.route("/:id/invite/accept").post(protect, acceptInvite);
router.route("/:id/invite/decline").post(protect, declineInvite);
router
  .route("/:id")
  .get(protect, getEvent)
  .put(protect, updateEvent)
  .delete(protect, deleteEvent);

export default router;
