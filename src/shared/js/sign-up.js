const $dialog = $("#modal-signUp");
const $signUpOpenModal = $("#signup");
const $signUpCloseModal = $("#close-modal");
import "jquery";
import "slick-carousel";

export let cacheData;

$(".modal-signUp__slick")
  .slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 400,
    dots: true,
    fade: true,
    prevArrow: false,
    nextArrow: true,
    adaptiveHeight: true,
    cssEase: "linear",
    draggable: false,
    nextArrow: $("button[role='next-slide']"),
  })
  .on("afterChange", (_, __, index) => {
    if (index >= $(".slick-track > div").length - 2) {
      $(".slick-dots > li:last-child").addClass("slick-active");
    }
  });

$(() => {
  $(".modal-signUp__slick > .slick-dots > li:last-child").remove();
  $(".modal-signUp__slick > .slick-dots > li:last-child").remove();
  $("li[role='presentation']").off("click");
});

$signUpOpenModal.click(() => {
  $("body").css("overflow", "hidden");
  $dialog.css("visibility", "visible");
});

$signUpCloseModal.click(() => {
  $("body").css("overflow", "visible");
  $dialog.css("visibility", "hidden");
});

$(".toggle-element").click((e) => {
  const [circle, checkbox] = Array.from(e.currentTarget.children);

  $(circle).toggleClass("animation-toggle");
  $(checkbox).attr("checked", true);
  $(checkbox).attr("data-active", true);

  $(circle.parentElement).animate({ opacity: 1 }, 700);
  $(circle.parentElement).css("backgroundColor", "#FF4460");

  if (!$(circle).hasClass("animation-toggle")) {
    $(circle.parentElement).css("backgroundColor", "rgb(179, 186, 207)");
    $(circle.parentElement).animate({ opacity: 0.3 }, 700);
    $(checkbox).attr("checked", false);
    $(checkbox).attr("data-active", false);
  }
});

$("input[type='date']").on("change", (e) => {
  let valueDate = e.currentTarget.value.split("-").reverse().join(".");
  $("#text-date").val(valueDate);
  $("#text-date").attr("data-choose", valueDate);
  $("#text-date").attr("data-active", true);
});

$("#name").on("change", (e) => {
  let valueDate = e.currentTarget.value;
  $("#name").attr("data-choose", valueDate);
  $("#name").attr("data-active", true);
});

$(".pass-icon").on("click", (e) => {
  $(e.currentTarget)
    .siblings("input")
    .attr("type", (_, atr) => {
      if (atr === "password") {
        $(e.currentTarget).attr("src", "./shared/images/show-password-eye.svg");
        return "text";
      }
      $(e.currentTarget).attr("src", "./shared/images/hide-password-eye.svg");
      return "password";
    });
});

class UserChoce {
  static storageOfSelected = [];

  static choce(currentSlide) {
    Array.from(currentSlide.children).forEach((currentNode) => {
      if (currentNode.getAttribute("data-active")) {
        const choose = currentNode.dataset.choose;
        choose && this.storageOfSelected.push(choose);
      } else {
        this.choce(currentNode);
      }
    });
    return this.storageOfSelected;
  }
}

$("button[role='next-slide']").on("click", (e) => {
  const $$$ = e.currentTarget.closest(".slick-slide > div > div");
  $(e.currentTarget).attr("data-active", true);
  cacheData = UserChoce.choce($$$);
});
