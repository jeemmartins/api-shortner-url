const express = require("express");
const router = express.Router();
const bs58 = require("bs58");

const urls = new Map();

let index = 0;

router.post("/", (req, res) => {
  index += 1;

  const id = bs58.encode(Buffer.from(index.toString()));

  urls.set(id, req.body.url);

  res.status(200).json({
    url: `${process.env.API_URL}/${id}`,
  });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  const url = urls.get(id);

  if (!url) {
    res.status(404).json({ message: "Not found" });
    return;
  }

  res.redirect(url);
});

module.exports = router;
