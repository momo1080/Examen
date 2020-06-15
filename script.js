// burger
const nav = document.querySelector("#nav");
const burger = document.querySelector("#burger");
const li = document.querySelectorAll(".menuli");
const form = document.querySelector("#form");

li.forEach((element) => {
  element.addEventListener("click", function () {
    nav.classList.toggle("active");
  });
});

burger.addEventListener("click", function () {
  nav.classList.toggle("active");
});

// OPTIONEL
form.addEventListener("submit", function (e) {
  e.preventDefault();
  nav.classList.toggle("active");
});
