const { Router } = require("express");
const registerRouter = Router();
const registerContainer = require("../controller/registerController.js");

registerRouter.get("/", (req, res) => {
    res.render("register");
});

registerRouter.post("/", (req, res) => {
    const { username, password, email } = req.body
    registerContainer.save({ username, password, email })
        .then((user) => {
            if (user) {
                res.render('success');
            } else {
                res.render('error', { error: "Usuario ya existe", url: "/register" });
            }
        })
});

module.exports = registerRouter;