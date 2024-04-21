const $dialog = $("#modal-signUp");
const $signUpOpenModal = $("#signup");
const $signUpCloseModal = $("#close-modal");
const $toggleElement = $(".toggle-element__cirlce");


$signUpOpenModal.click(() => {
    $('body').css('overflow','hidden')
    $dialog.css("visibility", "visible")
})

$signUpCloseModal.click(() => {
    $('body').css('overflow','visible')
    $dialog.css("visibility", "hidden")
})

$(".toggle-element").click((e) => {
    const [circle, checkbox] = Array.from(e.currentTarget.children);

    $(circle).toggleClass("animation-toggle");
    $(checkbox).attr("checked", true);

    $(circle.parentElement).animate({ opacity : 1 },700);
    $(circle.parentElement).css("backgroundColor", "#FF4460");
    
    if(!$(circle).hasClass("animation-toggle")){
        
        $(circle.parentElement).css("backgroundColor", "rgb(179, 186, 207)");
        $(circle.parentElement).animate({ opacity : 0.3 },700);
        $(checkbox).attr("checked", false);
    }
})



