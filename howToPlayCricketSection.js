// how to play cricket section

let pointer = document.querySelector(".pointer");

let pointer_one = document.querySelector(".pointer-one");
let pointer_two = document.querySelector(".pointer-two");
let pointer_three = document.querySelector(".pointer-three");
let pointer_forth = document.querySelector(".pointer-forth");
let pointer_fifth = document.querySelector(".pointer-fifth");
// let accordion_header = document.querySelectorAll(".accordion-header");

let pointer_one_btn = document.querySelector(".pointer-one-btn");
let pointer_two_btn = document.querySelector(".pointer-two-btn");
let pointer_three_btn = document.querySelector(".pointer-three-btn");
let pointer_forth_btn = document.querySelector(".pointer-forth-btn");
let pointer_fifth_btn = document.querySelector(".pointer-fifth-btn");
// let accordion_button = document.querySelectorAll(".accordion-button");

let img_1 = document.querySelector(".img-1");
let img_2 = document.querySelector(".img-2");
let img_3 = document.querySelector(".img-3");
let img_4 = document.querySelector(".img-4");
let img_5 = document.querySelector(".img-5");
// let participate_cricket_img = document.querySelectorAll(".participate-cricket-img");

pointer_one.addEventListener("click", () => {
  img_1.classList.remove("img-dont-show");

  img_2.classList.add("img-dont-show");
  img_3.classList.add("img-dont-show");
  img_4.classList.add("img-dont-show");
  img_5.classList.add("img-dont-show");

  pointer_one_btn.classList.add("text-red");

  pointer_two_btn.classList.remove("text-red");
  pointer_three_btn.classList.remove("text-red");
  pointer_forth_btn.classList.remove("text-red");
  pointer_fifth_btn.classList.remove("text-red");

  pointer.classList.add("img-goto-second");
  pointer.classList.remove(
    "img-goto-second",
    "img-goto-third",
    "img-goto-forth",
    "img-goto-fifth"
  );
});
pointer_two.addEventListener("click", () => {
  img_2.classList.remove("img-dont-show");

  img_1.classList.add("img-dont-show");
  img_3.classList.add("img-dont-show");
  img_4.classList.add("img-dont-show");
  img_5.classList.add("img-dont-show");

  pointer_two_btn.classList.add("text-red");

  pointer_one_btn.classList.remove("text-red");
  pointer_three_btn.classList.remove("text-red");
  pointer_forth_btn.classList.remove("text-red");
  pointer_fifth_btn.classList.remove("text-red");

  pointer.classList.add("img-goto-second");
  pointer.classList.remove(
    "img-goto-first",
    "img-goto-third",
    "img-goto-forth",
    "img-goto-fifth"
  );
});

pointer_three.addEventListener("click", () => {
  img_3.classList.remove("img-dont-show");

  img_1.classList.add("img-dont-show");
  img_2.classList.add("img-dont-show");
  img_4.classList.add("img-dont-show");
  img_5.classList.add("img-dont-show");

  pointer_three_btn.classList.add("text-red");

  pointer_one_btn.classList.remove("text-red");
  pointer_two_btn.classList.remove("text-red");
  pointer_forth_btn.classList.remove("text-red");
  pointer_fifth_btn.classList.remove("text-red");

  pointer.classList.add("img-goto-third");
  pointer.classList.remove(
    "img-goto-first",
    "img-goto-second",
    "img-goto-forth",
    "img-goto-fifth"
  );
});

pointer_forth.addEventListener("click", () => {
  img_4.classList.remove("img-dont-show");

  img_1.classList.add("img-dont-show");
  img_2.classList.add("img-dont-show");
  img_3.classList.add("img-dont-show");
  img_5.classList.add("img-dont-show");

  pointer_forth_btn.classList.add("text-red");

  pointer_one_btn.classList.remove("text-red");
  pointer_two_btn.classList.remove("text-red");
  pointer_three_btn.classList.remove("text-red");
  pointer_fifth_btn.classList.remove("text-red");

  pointer.classList.add("img-goto-forth");
  pointer.classList.remove(
    "img-goto-first",
    "img-goto-second",
    "img-goto-third",
    "img-goto-fifth"
  );
});

pointer_fifth.addEventListener("click", () => {
  img_5.classList.remove("img-dont-show");

  img_1.classList.add("img-dont-show");
  img_2.classList.add("img-dont-show");
  img_3.classList.add("img-dont-show");
  img_4.classList.add("img-dont-show");

  pointer_fifth_btn.classList.add("text-red");

  pointer_one_btn.classList.remove("text-red");
  pointer_two_btn.classList.remove("text-red");
  pointer_three_btn.classList.remove("text-red");
  pointer_forth_btn.classList.remove("text-red");

  pointer.classList.add("img-goto-fifth");
  pointer.classList.remove(
    "img-goto-first",
    "img-goto-second",
    "img-goto-third",
    "img-goto-forth"
  );
});
