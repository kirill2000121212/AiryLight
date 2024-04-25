const express = require("express");
require("dotenv").config();
const app = express();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("hello!");
});

app.listen(PORT, () => {
  console.log(`PORT listen ${PORT}`);
});
