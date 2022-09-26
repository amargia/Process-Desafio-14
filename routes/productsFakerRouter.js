const express = require("express");
const { Router } = express;
const router = Router();

const ContenedorFaker = require("../controller/fakerController.js");

router.get("/", (req, res) => {
    ContenedorFaker.getAll()
    .then((products) => {
        res.status(200).send(products);
    })
});

module.exports = router;