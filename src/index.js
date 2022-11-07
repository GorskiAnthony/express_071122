// J'importe mon .env
require("dotenv").config();

// Ensuite, j'importe toutes mes dépendances dont j'ai besoin
const express = require("express");
const logger = require("morgan");
const routes = require("./src/routes/index.js");

const app = express();

// Ici, j'utilise mon logger
app.use(logger("dev"));
app.use(express.json());

app.use("/api", routes);

module.exports = app;
