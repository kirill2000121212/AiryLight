const $modalSignIn = $(".sign-in");
const $singInOpenModal = $("li[role='sign-in']");
const $signInCloseModal = $(".close-sign-in");

$singInOpenModal.on("click", () => {
  $("body").css("overflow", "hidden");
  $modalSignIn.css("visibility", "visible");
});

$signInCloseModal.on("click", () => {
  $("body").css("overflow", "visible");
  $modalSignIn.css("visibility", "hidden");
});
