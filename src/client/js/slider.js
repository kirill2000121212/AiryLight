const $dialog = document.querySelector("#modal-signUp");
const $signUpOpenModal = $("#signup");
const $signUpCloseModal = $("#close-modal");


$signUpOpenModal.click(() => {
    $('body').css('overflow','hidden')
    $dialog.showModal()
})

$signUpCloseModal.click(() => {
    $('body').css('overflow','visible')
    $dialog.close()
})

