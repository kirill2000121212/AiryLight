const $dialog = $("#modal-signUp");
const $signUpOpenModal = $("#signup");
const $signUpCloseModal = $("#close-modal");
const $toggleElement = $(".toggle-element__cirlce");

$signUpOpenModal.click(() => {
    $('body').css('overflow','hidden');
    $dialog.css("visibility", "visible");
    
    $(".slick-dots > li").remove(".slick-dots > li:last-child");
    $(".slick-dots > li").remove(".slick-dots > li:last-child");
})


$signUpCloseModal.click(() => {
    $('body').css('overflow','visible')
    $dialog.css("visibility", "hidden");
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


$("input[type='date']").on("change", (e) => {
    let valueDate = e.currentTarget.value
        .split("-").reverse().join(".");
    $("#text-date").val(valueDate);
    $("#text-date").attr("data-choose", valueDate);
})

$("#name").on("change", (e) => {
    let valueDate = e.currentTarget.value;
    $("#name").attr("data-choose", valueDate);
})


$(".pass-icon").on("click",(e) => {
    $(e.currentTarget).siblings("input").attr("type", (_,atr) => {

        if(atr === 'password'){
            $(e.currentTarget).attr("src", "images/show-password-eye.svg")
            return 'text';
        }
        $(e.currentTarget).attr("src", "images/hide-password-eye.svg")
        return "password"
    });
    
})


