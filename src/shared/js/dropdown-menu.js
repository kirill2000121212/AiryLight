const $menu = $(".dropdown__menu");
const $menuOpenBtn = $("#menu");

$menuOpenBtn.on("click", () => {
  $menu.toggleClass("visible");
  if ($("#menu > img").attr("src") === "./shared/images/menu.svg") {
    $("#menu > img").attr("src", "./shared/images/close-menu.svg");
  } else {
    $("#menu > img").attr("src", "./shared/images/menu.svg");
  }
});
