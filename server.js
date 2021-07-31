import express from "express";
import colors from "colors";
import connectDB from "./config/db.js";
import userRoute from "./routes/users.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

const app = express();

app.use(express.json());

// Connect To MongoDB
connectDB();

app.use("/api/users", userRoute);

// Error Middleware
app.use(notFound);
app.use(errorHandler);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server Running On Port: ${PORT.toString().bold.green}`.yellow)
);
