// J'importe mon .env
require("dotenv").config();

// Ensuite, j'importe toutes mes dépendances dont j'ai besoin
const express = require("express");
const logger = require("morgan");

const app = express();

// Ici, j'utilise mon logger
app.use(logger("dev"));

app.get("/", (req, res) => {
	res.send("Hello World!");
});

module.exports = app;
