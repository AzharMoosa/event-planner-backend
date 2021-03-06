import asyncHandler from "express-async-handler";
import Event from "../models/Event.js";
import InvitedEvent from "../models/InvitedEvent.js";
import User from "../models/User.js";

// @desc        Get Events
// @route       GET /api/events
// @access      Private
const getEvents = asyncHandler(async (req, res) => {
  const events = await Event.find({ hostUser: req.user._id });
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
  const { name, isCustom, place, location, description, limit, date } =
    req.body;

  const createdEvent = await Event.create({
    name,
    description,
    isCustom,
    location,
    place: place,
    limit,
    date,
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
  const { name, isCustom, place, location, description, limit, date } =
    req.body;

  const event = await Event.findById(req.params.id);

  if (event) {
    event.name = name || event.name;
    event.description = description || event.description;
    event.isCustom = isCustom;
    event.place = place || event.place;
    event.location = location || event.location;
    event.limit = limit || event.limit;
    event.date = date || event.date;
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

// @desc        Delete Event
// @route       DELETE /api/events
// @access      Private
const deleteMyEvents = asyncHandler(async (req, res) => {
  const events = await Event.find({ hostUser: req.user._id });

  if (events) {
    let invitedEvents = [];
    for (let i = 0; i < events.length; i++) {
      await Event.findByIdAndDelete(events[i]._id);
      const eventIDs = await InvitedEvent.find({ event: events[i]._id });
      invitedEvents = [...invitedEvents, ...eventIDs];
    }

    for (let i = 0; i < invitedEvents.length; i++) {
      await InvitedEvent.findByIdAndDelete(invitedEvents[i]._id);
    }

    res.json({ message: "Events Removed" });
  } else {
    res.status(404);
    throw new Error("Events Not Found");
  }
});

// @desc        Invite User To Event
// @route       POST /api/events/:id/invite
// @access      Private
const inviteUser = asyncHandler(async (req, res) => {
  const { userTwo } = req.body;

  const userOne = req.user._id;

  const event = await Event.findById(req.params.id);

  if (event.currentInvited == event.limit) {
    res.status(404);
    res.json({ message: "Maximum People Reached" });
    return;
  }

  if (event) {
    // Send Invite From User One To User Two
    const inviteSend = await InvitedEvent.findOneAndUpdate(
      { requester: userOne, recipient: userTwo },
      { $set: { status: 1, event } },
      { upsert: true, new: true }
    );

    // User Two Recieves Invite From User One
    const inviteRecieve = await InvitedEvent.findOneAndUpdate(
      { recipient: userOne, requester: userTwo },
      { $set: { status: 2, event } },
      { upsert: true, new: true }
    );

    // Updates Invited Events Array For User One
    const updateUserOne = await User.findOneAndUpdate(
      { _id: userOne },
      { $push: { invitedEvents: inviteSend._id } }
    );

    // Updates Invited Events Array For User Two
    const updateUserTwo = await User.findOneAndUpdate(
      { _id: userTwo },
      { $push: { invitedEvents: inviteRecieve._id } }
    );

    event.currentInvited += 1;

    await event.save();

    res.json(event);
  } else {
    res.status(404);
    throw new Error("Event Not Found");
  }
});

// @desc        Accepts Invite To Event
// @route       POST /api/events/:id/invite/accept
// @access      Private
const acceptInvite = asyncHandler(async (req, res) => {
  const userTwo = req.user._id;

  const event = await Event.findById(req.params.id);
  const userOne = event.hostUser;

  if (event) {
    await InvitedEvent.findOneAndUpdate(
      { requester: userOne, recipient: userTwo, event: req.params.id },
      { $set: { status: 3 } }
    );

    await InvitedEvent.findOneAndUpdate(
      { recipient: userOne, requester: userTwo, event: req.params.id },
      { $set: { status: 3 } }
    );

    res.json(event);
  } else {
    res.status(404);
    throw new Error("Event Not Found");
  }
});

// @desc        Declines Invite To Event
// @route       POST /api/events/:id/invite/decline
// @access      Private
const declineInvite = asyncHandler(async (req, res) => {
  const userTwo = req.user._id;

  const event = await Event.findById(req.params.id);
  const userOne = event.hostUser;

  if (event) {
    const inviteSend = await InvitedEvent.findOneAndRemove({
      requester: userOne,
      recipient: userTwo,
      event: req.params.id,
    });

    const inviteRecieve = await InvitedEvent.findOneAndRemove({
      recipient: userOne,
      requester: userTwo,
      event: req.params.id,
    });

    const updateUserOne = await User.findOneAndUpdate(
      { _id: userOne },
      { $pull: { invitedEvents: inviteSend._id } }
    );
    const updateUserTwo = await User.findOneAndUpdate(
      { _id: userTwo },
      { $pull: { invitedEvents: inviteRecieve._id } }
    );

    res.json({ message: "Event Declined" });
  } else {
    res.status(404);
    throw new Error("Event Not Found");
  }
});

// @desc        Get Already Invited Users
// @route       GET /api/events/:id/invited
// @access      Private
const invitedUsers = asyncHandler(async (req, res) => {
  const userOne = req.user._id;
  const event = await Event.findById(req.params.id);

  if (event) {
    const eventsRequested = await InvitedEvent.find({
      requester: userOne,
      event: req.params.id,
    });

    const usersID = [req.user._id];

    for (let i = 0; i < eventsRequested.length; i++) {
      usersID.push(eventsRequested[i].recipient);
    }

    const users = await User.find(
      { _id: { $nin: usersID } },
      { firstName: 1, lastName: 1, _id: 1, email: 1 }
    );

    res.json(users);
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
  acceptInvite,
  declineInvite,
  invitedUsers,
  deleteMyEvents,
};
