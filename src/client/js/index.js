import "../index.html";
import "../scss/index.scss";
import "./slider"
import 'jquery';
import "slick-carousel";

$(".modal-signUp__slick").slick({
    infinite : false,
    slidesToShow : 1,
    slidesToScroll : 1,
    speed : 350,
    dots : true,
    fade : true,
    prevArrow : false,
    nextArrow : false,
    adaptiveHeight : true,
    cssEase: 'linear',
    // draggable : true || false // листать ли с зажатия.. swipe для мобилы
});