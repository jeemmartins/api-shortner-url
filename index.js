const dotenv = require("dotenv");

dotenv.config();

const express = require("express");
const bodyParser = require("body-parser");
const bs58 = require("bs58");

const urls = new Map();

let index = 0;

const app = express();

app.use(bodyParser.json());

app.post("/", (req, res) => {
  index += 1;

  const id = bs58.encode(Buffer.from(index.toString()));

  urls.set(id, req.body.url);

  res.status(200).json({
    url: `${process.env.API_URL}/${id}`,
  });
});

app.get("/:id", (req, res) => {
  const id = req.params.id;

  const url = urls.get(id);

  if (!url) {
    res.status(404).json({ message: "Not found" });
    return;
  }

  res.redirect(url);
});

app.listen(+process.env.PORT, () =>
  console.log(`http://localhost:${process.env.PORT}`)
);
