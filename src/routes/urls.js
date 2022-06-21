const express = require("express");
const { urlsPost, urlsGetById } = require("../endpoints/urls");
const router = express.Router();

router.post("/", urlsPost);

router.get("/:id", urlsGetById);

module.exports = router;
