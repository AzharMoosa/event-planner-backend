import asyncHandler from "express-async-handler";
import Event from "../models/Event.js";

// @desc        Get Events
// @route       GET /api/events
// @access      Private
const getEvents = asyncHandler(async (req, res) => {
  const events = await Event.find({ user: req.user._id });
  if (events) {
    res.json(events);
  } else {
    res.status(404);
    throw new Error("Events Not Found");
  }
});

// @desc        Get Event
// @route       GET /api/events/:id
// @access      Private
const getEvent = asyncHandler(async (req, res) => {
  const event = await Event.findById(req.params.id);
  if (event) {
    res.json(event);
  } else {
    res.status(404);
    throw new Error("Event Not Found");
  }
});

// @desc        Create Event
// @route       POST /api/events
// @access      Private
const createEvent = asyncHandler(async (req, res) => {
  const { name, isCustom, place, location, description, limit } = req.body;

  const createdEvent = await Event.create({
    name,
    description,
    isCustom,
    location,
    place,
    limit,
    hostUser: req.user._id,
  });
  if (createdEvent) {
    res.json(createdEvent);
  } else {
    res.status(401);
    throw new Error("API Error");
  }
});

// @desc        Update Event
// @route       PUT /api/events/:id
// @access      Private
const updateEvent = asyncHandler(async (req, res) => {
  const { name, isCustom, place, location, description, limit } = req.body;

  const event = await Event.findById(req.params.id);

  if (event) {
    event.name = name || event.name;
    event.description = description || event.description;
    event.isCustom = isCustom;
    event.place = place || event.place;
    event.location = location || event.location;
    event.limit = limit || event.limit;
    const updatedEvent = await event.save();
    res.json(updatedEvent);
  } else {
    res.status(404);
    throw new Error("Event Not Found");
  }
});

// @desc        Delete Event
// @route       DELETE /api/events/:id
// @access      Private
const deleteEvent = asyncHandler(async (req, res) => {
  const event = await Event.findById(req.params.id);
  if (event) {
    await event.remove();
    res.json({ message: "Event Removed" });
  } else {
    res.status(404);
    throw new Error("Event Not Found");
  }
});

// @desc        Invite User To Event
// @route       POST /api/events/:id/invite
// @access      Private
const inviteUser = asyncHandler(async (req, res) => {
  const event = await Event.findById(req.params.id);
  if (event) {
    res.json(event);
  } else {
    res.status(404);
    throw new Error("Event Not Found");
  }
});

export {
  getEvents,
  getEvent,
  createEvent,
  updateEvent,
  deleteEvent,
  inviteUser,
};
