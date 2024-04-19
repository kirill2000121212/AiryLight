const EXPRESS = require("express");
const CORS = require("cors");
require("dotenv").config();
const APP = EXPRESS();

const PORT = process.env.PORT;

APP.use(CORS());

const data = [
    { name : "vlad", age : 18 },
    { name : "kirill", age : 44 }
]

APP.get("/data", (req, res) => {
    res.send(JSON.stringify(data));
})

APP.listen(PORT, () => {
    console.log(`${PORT} is working`);
});