const express = require("express");
const Router = express.Router();
const UserController = require("../controllers/User.controller");

Router.get("/", UserController.welcome);

module.exports = Router;
