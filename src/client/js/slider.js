const $dialog = document.querySelector("#modal-signUp");
const $signUpOpenModal = $("#signup");
const $signUpCloseModal = $("#close-modal");

$signUpOpenModal.click(() => $dialog.showModal())
$signUpCloseModal.click(() => $dialog.close())

