const express = require("express");
const bodyParser = require("body-parser");

const urls = new Map();

let index = 0;

const app = express();

app.use(bodyParser.json());

app.post("/", (req, res) => {
  index += 1;

  urls.set(index, req.body.url);

  res.status(200).json({
    url: `http://localhost:3000/${index}`,
  });
});

app.get("/:id", (req, res) => {
  const id = req.params.id;

  const url = urls.get(+id);

  if (!url) {
    res.status(404).json({ message: "Not found" });
    return;
  }

  res.redirect(url);
});

app.listen(3000, () => console.log("http://localhost:3000"));
