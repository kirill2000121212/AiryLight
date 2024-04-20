const EXPRESS = require("express");
const CORS = require("cors");
require("dotenv").config();
const APP = EXPRESS();

const PORT = process.env.PORT;

APP.use(CORS());

APP.get("/data", (req, res) => {
    res.send("lol");
})

APP.listen(PORT, () => {
    console.log(`${PORT} is working`);
});