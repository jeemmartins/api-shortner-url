const dotenv = require("dotenv");

dotenv.config();

const express = require("express");
const bodyParser = require("body-parser");
const routerUrls = require("./routes/urls");

const app = express();

app.use(bodyParser.json());

app.use(routerUrls);

app.listen(+process.env.PORT, () =>
  console.log(`http://localhost:${process.env.PORT}`)
);
