import asyncHandler from "express-async-handler";
import Place from "../models/Place.js";
import generateToken from "../utils/generateToken.js";

// @desc        Get Places
// @route       GET /api/places
// @access      Private
const getPlaces = asyncHandler(async (req, res) => {
  const places = await Place.find({});

  if (places) {
    res.json(places);
  } else {
    res.status(401);
    throw new Error("API Error");
  }
});

export { getPlaces };
