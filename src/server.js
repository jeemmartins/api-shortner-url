const dotenv = require("dotenv");

dotenv.config();

const app = require("./app");

app.listen(+process.env.PORT, () =>
  console.log(`http://localhost:${process.env.PORT}`)
);
