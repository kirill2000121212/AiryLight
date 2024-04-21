const $dialog = document.querySelector("#modal-signUp");
const $signUpOpenModal = $("#signup");
const $signUpCloseModal = $("#close-modal");
const $toggleCheckbox = document.querySelectorAll("input[type='checkbox']");


$signUpOpenModal.click(() => {
    $('body').css('overflow','hidden')
    $dialog.showModal()
})

$signUpCloseModal.click(() => {
    
    $('body').css('overflow','visible')
    $dialog.close()
})

$toggleCheckbox.forEach((e) => {
    
   $(e).click(() => {

    $(e).toggleClass("checked")

    if($(e).hasClass("checked")){
        
        $(".toggle-elemet__cirlce").toggleClass("animation-toggle");
        $(".toggle-elemet__cirlce").removeClass("animation-toggle-back");

        if(!$(".toggle-elemet__cirlce").hasClass("animation-toggle")){

            $(".toggle-elemet__cirlce").removeClass("animation-toggle");
            $(".toggle-elemet__cirlce").toggleClass("animation-toggle-back");
        }
    }

   })
    
})


