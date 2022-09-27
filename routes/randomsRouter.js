const { Router } = require("express");
const randoms = Router();

const { fork } = require("child_process");


randoms.get("/", (req, res) => {
    const qty = req.query.qty;
    const randoms = fork("./controller/randomsController.js");
    if (isNaN(qty)) {
        let n = 100000000;
        randoms.send(["start", n]);
        randoms.on("message", (msg) => {
            res.send(msg);
        });
    } else {
        randoms.send(["start", qty]);
        randoms.on("message", (msg) => {
            res.send(msg);
        });
    }
})

module.exports = randoms;