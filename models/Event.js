import mongoose from "mongoose";

const EventSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    isCustom: {
      type: Boolean,
      required: true,
      default: false,
    },
    hostUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    place: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Place",
    },
    location: {
      address: { type: String },
      postalCode: { type: String },
      city: { type: String },
      country: { type: String },
    },
    description: {
      type: String,
      required: true,
    },
    limit: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Event = mongoose.model("Event", EventSchema);

export default Event;
