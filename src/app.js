const express = require("express");
const bodyParser = require("body-parser");
const routerUrls = require("./routes/urls");

const app = express();

app.use(bodyParser.json());

app.use(routerUrls);

module.exports = app;
