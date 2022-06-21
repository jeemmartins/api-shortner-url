const { createUrl } = require("../functions/createUrl");
const { getUrl } = require("../functions/getUrl");

exports.urlsPost = (req, res) => {
  const id = createUrl(req.body.url);

  res.status(200).json({
    url: `${process.env.API_URL}/${id}`,
  });
};

exports.urlsGetById = (req, res) => {
  const url = getUrl(req.params.id);

  if (!url) {
    res.status(404).json({ message: "Not found" });
    return;
  }

  res.redirect(url);
};
