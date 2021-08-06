import asyncHandler from "express-async-handler";
import Place from "../models/Place.js";

// @desc        Get Places
// @route       GET /api/places
// @access      Private/Admin
const getPlaces = asyncHandler(async (req, res) => {
  const places = await Place.find({});

  places.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));

  if (places) {
    res.json(places);
  } else {
    res.status(401);
    throw new Error("API Error");
  }
});

// @desc        Get Places
// @route       GET /api/places/:id
// @access      Private/Admin
const getPlace = asyncHandler(async (req, res) => {
  const place = await Place.findById(req.params.id);

  if (place) {
    res.json(place);
  } else {
    res.status(401);
    throw new Error("API Error");
  }
});

// @desc        Create Place
// @route       POST /api/places
// @access      Private/Admin
const createPlace = asyncHandler(async (req, res) => {
  const place = new Place({
    name: "Sample Name",
    description: "Sample Description",
    image: "/images/sample.jpg",
    location: {
      address: "Sample Address",
      postalCode: "Sample Post Code",
      city: "Sample City",
      country: "Sample City",
    },
    user: req.user._id,
    info: "Sample Website",
  });

  const createdPlace = await place.save();
  res.status(200).json(createdPlace);
});

// @desc        Update Place
// @route       PUT /api/places/:id
// @access      Private/Admin
const updatePlace = asyncHandler(async (req, res) => {
  const { name, description, image, location, rating, info } = req.body;

  const place = await Place.findById(req.params.id);

  if (place) {
    place.name = name || place.name;
    place.description = description || place.description;
    place.location = location || place.location;
    place.image = image || place.image;
    place.rating = rating || place.rating;
    place.info = info || place.info;
    const updatedPlace = await place.save();
    res.json(updatedPlace);
  } else {
    res.status(401);
    throw new Error("Place Does Not Exists");
  }
});

// @desc        Add Keyword Place
// @route       PUT /api/places/:id/keyword
// @access      Private/Admin
const addKeyword = asyncHandler(async (req, res) => {
  const { keyword } = req.body;

  const place = await Place.findById(req.params.id);

  if (place) {
    place.keywords = [...place.keywords, keyword];
    const updatedPlace = await place.save();
    res.json(updatedPlace);
  } else {
    res.status(401);
    throw new Error("Place Does Not Exists");
  }
});

// @desc        Delete Place
// @route       DELETE /api/places/:id
// @access      Private/Admin
const deletePlace = asyncHandler(async (req, res) => {
  const place = await Place.findById(req.params.id);
  if (place) {
    await place.remove();
    res.json({ message: "Place Removed" });
  } else {
    res.status(404);
    throw new Error("Place Not Found");
  }
});

export {
  getPlaces,
  getPlace,
  createPlace,
  updatePlace,
  addKeyword,
  deletePlace,
};
