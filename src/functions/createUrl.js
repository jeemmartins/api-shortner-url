const bs58 = require("bs58");
const { urls } = require("../utils/urls");

let index = 0;

exports.createUrl = (url) => {
  index += 1;

  const id = bs58.encode(Buffer.from(index.toString()));

  urls.set(id, url);

  return id;
};
