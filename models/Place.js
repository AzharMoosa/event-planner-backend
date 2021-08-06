import mongoose from "mongoose";

const PlacesSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  location: {
    address: { type: String, required: true },
    postalCode: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
  },
  keywords: [{ type: String }],
  rating: {
    type: Number,
    default: 1,
  },
  info: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Place = mongoose.model("Place", PlacesSchema);

export default Place;
