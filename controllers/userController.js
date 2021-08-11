import asyncHandler from "express-async-handler";
import User from "../models/User.js";
import Event from "../models/Event.js";
import InvitedEvent from "../models/InvitedEvent.js";
import generateToken from "../utils/generateToken.js";

// @desc        Login User
// @route       POST /api/users/login
// @access      Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

// @desc        Register User
// @route       POST /api/users
// @access      Public
const registerUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User Already Exists");
  }

  const user = await User.create({
    firstName,
    lastName,
    email,
    password,
  });

  if (user) {
    res.json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

// @desc        Get Users
// @route       GET /api/users
// @access      Private
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find(
    {},
    { firstName: 1, lastName: 1, email: 1, _id: 1 }
  );

  if (users) {
    res.json(users);
  } else {
    res.status(400);
    throw new Error("Users Not Found");
  }
});

// @desc        Get User By ID
// @route       GET /api/users/info
// @access      Private
const getUserInfo = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("User Does Not Exists");
  }
});

// @desc        Get User Events
// @route       GET /api/users/events
// @access      Private
const getUserEvents = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    const userEvents = await Event.find({ hostUser: req.user._id });
    for (let i = 0; i < user.invitedEvents.length; i++) {
      const invitedEvent = await InvitedEvent.findById(user.invitedEvents[i]);
      if (invitedEvent.status == 3) {
        const event = await Event.findById(invitedEvent.event);
        userEvents.push(event);
      }
    }

    const uniq = new Set(userEvents.map((e) => JSON.stringify(e)));
    const events = Array.from(uniq).map((e) => JSON.parse(e));

    res.json({
      events,
    });
  } else {
    res.status(400);
    throw new Error("User Does Not Exists");
  }
});

// @desc        Get User Invites
// @route       GET /api/users/invites
// @access      Private
const getUserInvites = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    const userInvites = [];
    for (let i = 0; i < user.invitedEvents.length; i++) {
      const invitedEvent = await InvitedEvent.findById(user.invitedEvents[i]);
      if (invitedEvent.status == 2) {
        const event = await Event.findById(invitedEvent.event);
        userInvites.push(event);
      }
    }
    res.json({
      events: userInvites,
    });
  } else {
    res.status(400);
    throw new Error("User Does Not Exists");
  }
});

// @desc        Update User
// @route       PUT /api/users/:id
// @access      Private
const updateUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const user = await User.findById(req.params.id);

  if (user) {
    user.firstName = firstName || user.firstName;
    user.lastName = lastName || user.lastName;
    user.email = email || user.email;
    user.password = password || user.password;
    const updatedUser = await user.save();
    res.json({
      _id: updatedUser._id,
      firstName: updatedUser.firstName,
      lastName: updatedUser.lastName,
      email: updatedUser.email,
      isAdmin: user.isAdmin,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error("User Not Found");
  }
});

// @desc        Delete User By ID
// @route       DELETE /api/users/:id
// @access      Private
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    await user.remove();
    res.json({ message: "User Removed" });
  } else {
    res.status(404);
    throw new Error("User Not Found");
  }
});

export {
  loginUser,
  registerUser,
  getUsers,
  updateUser,
  deleteUser,
  getUserInfo,
  getUserEvents,
  getUserInvites,
};
