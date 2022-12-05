require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const PORT = process.env.PORT || 4000;

mongoose.set("strictQuery", true);

const DB = require("./config/Database");
const UserRoute = require("./routes/UserRoute");

const app = express();

app.use("/", UserRoute);

app.listen(PORT, console.log(`Server is running on port ${PORT}`));
