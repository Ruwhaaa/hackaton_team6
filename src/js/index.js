const burger = document.querySelector("#menu-burger");
const menuMobile = document.querySelector("#top-mobile");

burger.addEventListener("click", () => {
  menuMobile.classList.toggle("hide");
});
