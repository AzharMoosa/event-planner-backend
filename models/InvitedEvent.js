import mongoose from "mongoose";

const InvitedEventSchema = mongoose.Schema(
  {
    requester: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    recipient: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    event: { type: mongoose.Schema.Types.ObjectId, ref: "Event" },
    status: {
      type: Number,
      // 0 - Add Event | 1 - Requested | 2 - Pending | 3 - Invited
      enums: [0, 1, 2, 3],
    },
  },
  {
    timestamps: true,
  }
);

const InvitedEvent = mongoose.model("InvitedEvent", InvitedEventSchema);

export default InvitedEvent;
