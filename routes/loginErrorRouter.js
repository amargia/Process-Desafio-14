const { Router } = require("express");
const loginErrorRouter = Router();

loginErrorRouter.get("/", (req, res) => {
    res.render("error", { error: "Usuario o contraseña incorrectos", url: "/login" });
});

module.exports = loginErrorRouter;