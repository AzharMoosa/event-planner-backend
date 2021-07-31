import asyncHandler from "express-async-handler";

// @desc        Login User
// @route       POST /api/users/login
// @access      Public
const loginUser = asyncHandler(async (req, res) => {});

// @desc        Register User
// @route       POST /api/users
// @access      Public
const registerUser = asyncHandler(async (req, res) => {});

// @desc        Get Users
// @route       GET /api/users
// @access      Private
const getUsers = asyncHandler(async (req, res) => {});

// @desc        Get User By ID
// @route       PUT /api/users/:id
// @access      Private
const getUserByID = asyncHandler(async (req, res) => {});

// @desc        Update User
// @route       PUT /api/users/:id
// @access      Private
const updateUser = asyncHandler(async (req, res) => {});

// @desc        Delete User By ID
// @route       DELETE /api/users/:id
// @access      Private
const deleteUser = asyncHandler(async (req, res) => {});

export {
  loginUser,
  registerUser,
  getUsers,
  updateUser,
  deleteUser,
  getUserByID,
};
