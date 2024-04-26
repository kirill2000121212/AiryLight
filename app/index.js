const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mailer = require("nodemailer");
const { resolve } = require("path");
require("dotenv").config();
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.set("view engine", "ejs");

const createPath = (page) => resolve(__dirname, "ejs-view", `${page}.ejs`);

app.get("/renders", (req, res) => {
  res.render(
    res.render(createPath("mail"), {
      link: "link for reg ;)",
      icon: resolve(__dirname, "../src/shared", "images", "Airy-icon.png"),
    })
  );
});

app.post("/send", async (req, res) => {
  try {
    const mail = mailer.createTransport({
      host: "smtp.mail.ru",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_LOGIN,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    const { userData, aboutUser } = req.body;

    mail.sendMail({
      from: process.env.EMAIL_LOGIN,
      to: userData["email"],
      subject: "Sign up AiryLight",
      html: "hahahaha",
    });

    return res.status(200).send({
      status: 200,
      message: "Письмо успешно отправлено",
    });
  } catch (error) {
    return res.status(500).send({
      status: 500,
      message: "Ошибка при запросе",
    });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`PORT listen ${process.env.PORT}`);
});

module.exports = app;
