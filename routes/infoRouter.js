const { Router } = require("express");
const infoRouter = Router();

const info = {
    Argumentos: process.argv.slice(2),
    Plataforma: process.platform,
    Version: process.version,
    Memoria: process.memoryUsage(),
    Path: process.execPath,
    Carpeta: process.cwd(),
    PID: process.pid,
}

infoRouter.get("/", (req, res) => {
  res.status(200).send(info);
});

module.exports = infoRouter;