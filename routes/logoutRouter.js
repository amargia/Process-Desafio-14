const { Router } = require("express");
const logoutRouter = Router();
const User = require("../models/User.js");

logoutRouter.get("/", async (req, res) => {
    const userData = await User.findById(req.user._id);
    const user = userData.username;
    req.session.destroy((err) => {
        if (err) {
            res.status(500).send("Error al cerrar sesión");
        } else {
            res.render("logout", { user });
        }
    });
});

module.exports = logoutRouter;