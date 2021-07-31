import express from "express";
import colors from "colors";
import connectDB from "./config/db.js";
const app = express();

// Connect To MongoDB
connectDB();

app.get("/", (req, res) => {
  res.send("API");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server Running On Port: ${PORT.toString().bold.green}`.yellow)
);
