import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import places from "./data/places.js";
import User from "./models/User.js";
import Place from "./models/Place.js";
import Event from "./models/Event.js";
import InvitedEvent from "./models/InvitedEvent.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    await Place.deleteMany();
    await Event.deleteMany();
    await InvitedEvent.deleteMany();

    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;

    console.log("Users Imported".cyan);

    const samplePlaces = places.map((place) => {
      return {
        ...place,
        user: adminUser,
      };
    });
    await Place.insertMany(samplePlaces);
    console.log("Places Imported".cyan);

    console.log("Data Imported!".white.bgGreen);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const importPlaces = async () => {
  try {
    await Place.deleteMany();

    const users = await User.find({ isAdmin: true });
    const adminUser = users[0]._id;

    const samplePlaces = places.map((place) => {
      return {
        ...place,
        user: adminUser,
      };
    });
    await Place.insertMany(samplePlaces);
    console.log("Places Imported".cyan);

    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();
    await Place.deleteMany();
    await Event.deleteMany();
    await InvitedEvent.deleteMany();
    console.log("Data Destoryed!".white.bgRed);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else if (process.argv[2] === "-p") {
  importPlaces();
} else {
  importData();
}
