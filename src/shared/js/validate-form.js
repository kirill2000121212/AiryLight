import { cacheData } from "./sign-up";

document.querySelector("#form-signUp").addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData();
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
  formData["mail"] = valMail;
  formData["password"] = valPassword;
});
