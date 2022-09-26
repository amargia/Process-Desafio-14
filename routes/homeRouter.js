const { Router } = require("express");
const home = Router();
const auth = require("../middlewares/auth.js");
const User = require("../models/User.js");

home.get("/", auth, async (req, res) => {
  const userData = await User.findById(req.user._id);
  const user = userData.username;
  res.render("home", { user: user });
});

module.exports = home;