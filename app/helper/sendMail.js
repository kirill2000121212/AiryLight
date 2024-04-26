// const { app } = require("../index");
// // const mailer = require("nodemailer");

// app.post("/send", async (req, res) => {
// try {
//   const mail = mailer.createTransport({
//     host: "smtp.mail.ru",
//     port: 465,
//     secure: true,
//     auth: {
//       user: "slava.tikhonov.99@internet.ru",
//       pass: "U3r6dS2GyT1sw9znvu2p",
//     },
//   });
// const { data, aboutUser } = req.body;
// res.send({ data, aboutUser });
// const { email, password } = req.body;
// console.log(req.body);
//   mail.sendMail({
//     from: "AiryLight@mail.love.ru",
//     to: email,
//     subject: "Sign up AiryLight",
//     message: `${email}, ${password}`,
//   });

//   return res.status(200).send({
//     status: 200,
//     message: "Письмо успешно отправлено",
//   });
// } catch (error) {
//   return res.status(500).send({
//     status: 500,
//     message: "Ошибка при запросе",
//   });
// }
// });
