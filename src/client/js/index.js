import "../index.html";
import "../scss/index.scss";
import "./slider"
import 'jquery';
import "slick-carousel";

$(".modal-signUp__slick").slick({
    infinite : false,
    slidesToShow : 1,
    slidesToScroll : 1,
    speed : 600,
    dots : true,
    fade : true,
    prevArrow : false,
    nextArrow : false,
    cssEase: 'linear'
});