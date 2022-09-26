const { Router } = require("express");
const passport = require("../middlewares/passport.js");
const loginRouter = Router();

// function authorize(req, res, next) {
//   if (req.session.user === "admin") {
//     return next();
//   } else {
//     res.status(401).send("No estas autorizado");
//   }
// }

loginRouter.get("/", (req, res) => {
    res.render("login");
});

loginRouter.post("/", passport.authenticate("local", {failureRedirect: "/loginError"}),
    (req, res) => {
        res.redirect("/");
    }
);

// loginRouter.get("/privada" , authorize , (req, res) => {
//     res.render("Ruta privada");
// });

module.exports = loginRouter;