const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("server running");
});

const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoute = require("./routes/auth/auth");
const authDashboard = require("./routes/auth/authDashboard");

dotenv.config();

mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to DB")
);

app.use(express.json(), cors());
app.use("/api/users", authRoute);
app.use("/api/dashboard", authDashboard);

app.listen(PORT, () => console.log("server is up on port " + PORT));
