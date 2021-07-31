import express from "express";
import colors from "colors";
import connectDB from "./config/db.js";
import userRoute from "./routes/users.js";
const app = express();

// Connect To MongoDB
connectDB();

app.use("/api/users", userRoute);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server Running On Port: ${PORT.toString().bold.green}`.yellow)
);
