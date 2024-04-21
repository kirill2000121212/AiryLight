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
    nextArrow : false,
    adaptiveHeight : true,
    cssEase: 'linear',
    draggable : false 
});