import { cacheData } from "./sign-up";
import { sendMail } from "../service/sendMail";
const $repeatSendMailBtn = $(".end-slider");

document.querySelector("#form-signUp").addEventListener("submit", (event) => {
  event.preventDefault();

  const sharedData = cacheData;
  const formData = new FormData(event.target);
  const valMail = $("input[name='email']").val();
  const valPassword = $("input[name='password']").val();
  const valPasswordReapet = $("input[name='repeat_password']").val();
  const repeatPasswordField = valPassword === valPasswordReapet;

  if (!repeatPasswordField) {
    throw new Error("Пароли не совпадают!");
  }

  if (!(/^\S+@\S+\.\S+$/g.test(valMail.trim()) && valMail.length)) {
    throw new Error("Маил не валидный!");
  }

  if (
    !(
      repeatPasswordField &&
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(valPassword.trim())
    )
  ) {
    throw new Error("Пароли не совпадают!");
  }
  const resultData = {
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      userData: Object.fromEntries(formData),
      aboutUser: sharedData,
    }),
    method: "POST",
  };
  sendMail("http://localhost:5050/send", resultData)
    .then((data) => console.log(data))
    .catch((e) => console.log(e));

  $repeatSendMailBtn.on("click", () => {
    sendMail("http://localhost:5050/send", resultData)
      .then((data) => console.log(data))
      .catch((e) => console.log(e));
  });
});

document.querySelector(".sign-in").addEventListener("submit", (event) => {
  event.preventDefault();
});
