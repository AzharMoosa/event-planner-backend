import express from "express";
import colors from "colors";
import connectDB from "./config/db.js";
import userRoute from "./routes/users.js";
import placeRoute from "./routes/places.js";
import eventRoute from "./routes/events.js";
import uploadRoute from "./routes/upload.js";
import path from "path";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

const app = express();

app.use(express.json());

// Connect To MongoDB
connectDB();

app.get("/", (req, res) => {
  res.json({ message: "Welcome To Event Planner API" });
});

// Routes
app.use("/api/users", userRoute);
app.use("/api/places", placeRoute);
app.use("/api/events", eventRoute);
app.use("/api/upload", uploadRoute);

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

// Error Middleware
app.use(notFound);
app.use(errorHandler);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server Running On Port: ${PORT.toString().bold.green}`.yellow)
);
