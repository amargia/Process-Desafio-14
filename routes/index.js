const express = require("express");
const router = express.Router();

const products = require("./productRouter");
const productsList = require("./productListRouter");
const home = require("./homeRouter");
const faker = require("./fakerRouter");
const productsFaker = require("./productsFakerRouter");
const login = require("./loginRouter");
const logout = require("./logoutRouter");
const register = require("./registerRouter");
const loginError = require("./loginErrorRouter");
const info = require("./infoRouter");
const random = require("./randomsRouter");

//middlewares

router.use("/productos", products);
router.use("/lista-productos", productsList);
router.use("/", home);
router.use("/api/productos-test", faker);
router.use("/api/faker-list", productsFaker);
router.use("/login", login);
router.use("/logout", logout);
router.use("/register", register);
router.use("/loginError", loginError);
router.use("/info", info);
router.use("/api/randoms", random);

module.exports = router;