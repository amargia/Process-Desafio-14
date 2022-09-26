const express = require("express");
const app = express();
const { faker } = require("@faker-js/faker");

const list = async () => {
    try {
        let id = 1;
        let products = [];
        const cantidad = 5;
        for (let i = 0; i < cantidad; i++) {
            products.push({
                id: id++,
                title: faker.name.firstName(),
                price: faker.commerce.price(),
                thumbnail: faker.image.transport(),
            });
        }
        return products;
    } catch (error) {
        console.log("Error in DB", error);
    }
}

module.exports = { list };