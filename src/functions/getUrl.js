const { urls } = require("../utils/urls");

exports.getUrl = (id) => {
  const url = urls.get(id);

  return url;
};
