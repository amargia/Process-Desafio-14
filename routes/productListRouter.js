const express = require("express");
const { Router } = require("express");
const productsList = Router();

const Contenedor = require("../controller/productsController")

productsList.get("/", (req, res) => {
  Contenedor.getAll()
  .then((data) => {
    res.status(200).send(data); 
  })
});


module.exports = productsList;