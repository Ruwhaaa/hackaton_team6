
const burger = document.querySelector("#menu-burger");
const menuMobile = document.querySelector(".top-mobile");

burger.addEventListener("click", () => {
  menuMobile.classList.toggle("show");
});

const btn1 = document.querySelector(".post1");
const slider1 = document.querySelector("#slider1");
const btn2 = document.querySelector(".post2");
const slider2 = document.querySelector("#slider2");
const btn3 = document.querySelector(".post3");
const slider3 = document.querySelector("#slider3");
const btn4 = document.querySelector(".post4");
const slider4 = document.querySelector("#slider4");

btn1.addEventListener("click", () => {
  slider1.classList.add("show");
  slider2.classList.remove("show");
  slider3.classList.remove("show");
  slider4.classList.remove("show");
});

btn2.addEventListener("click", () => {
  slider1.classList.remove("show");
  slider2.classList.add("show");
  slider3.classList.remove("show");
  slider4.classList.remove("show");
});

btn3.addEventListener("click", () => {
  slider1.classList.remove("show");
  slider2.classList.remove("show");
  slider3.classList.add("show");
  slider4.classList.remove("show");
});

btn4.addEventListener("click", () => {
  slider1.classList.remove("show");
  slider2.classList.remove("show");
  slider3.classList.remove("show");
  slider4.classList.add("show");
});
