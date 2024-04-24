import { cacheData } from "./sign-up";

document.querySelector("#form-signUp").addEventListener("submit", (event) => {

    event.preventDefault();

    const formData = new FormData();
    const valMail = $("input[name='email']").val();
    const valPassword = $("input[name='password']").val();
    const valPasswordReapet = $("input[name='repeat_password']").val();
    const repeatPasswordField = valPassword === valPasswordReapet;

        if(!repeatPasswordField){
            throw new Error('Пароли не совпадают!')
        }

        if(/^\S+@\S+\.\S+$/g.test(valMail.trim()) && valMail.length){
            formData['mail'] = valMail;
        }

        if(repeatPasswordField && /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(valPassword.trim()) ){
            formData['password'] = valPassword;
        }
    console.log(cacheData, formData);
})