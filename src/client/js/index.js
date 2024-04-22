import "../index.html";
import "../scss/index.scss";
import "./sign-up"
import 'jquery';
import "slick-carousel";

$(".modal-signUp__slick").slick({
    infinite : false,
    slidesToShow : 1,
    slidesToScroll : 1,
    speed : 400,
    dots : true,
    fade : true,
    prevArrow : false,
    nextArrow : true,
    adaptiveHeight : true,
    cssEase: 'linear',
    draggable : false,
    nextArrow : $("button[role='next-slide']"),
})
.on("afterChange", (_, __, index) => {
    
    if(index >= $(".slick-track > div").length - 2){
        
        $(".slick-dots > li:last-child").addClass("slick-active");
    }
})
