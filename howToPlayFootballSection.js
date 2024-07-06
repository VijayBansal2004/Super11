// how to play football-section

let pointer_2 = document.querySelector(".pointer-2");

let pointer_one_2 = document.querySelector(".pointer-one-2");
let pointer_two_2 = document.querySelector(".pointer-two-2");
let pointer_three_2 = document.querySelector(".pointer-three-2");
let pointer_forth_2 = document.querySelector(".pointer-forth-2");
let pointer_fifth_2 = document.querySelector(".pointer-fifth-2");

let pointer_one_btn_2 = document.querySelector(".pointer-one-btn-2");
let pointer_two_btn_2 = document.querySelector(".pointer-two-btn-2");
let pointer_three_btn_2 = document.querySelector(".pointer-three-btn-2");
let pointer_forth_btn_2 = document.querySelector(".pointer-forth-btn-2");
let pointer_fifth_btn_2 = document.querySelector(".pointer-fifth-btn-2");

let img_1_2 = document.querySelector(".img-1-2");
let img_2_2 = document.querySelector(".img-2-2");
let img_3_2 = document.querySelector(".img-3-2");
let img_4_2 = document.querySelector(".img-4-2");
let img_5_2 = document.querySelector(".img-5-2");

pointer_one_2.addEventListener("click", () => {
  img_1_2.classList.remove("img-dont-show");

  img_2_2.classList.add("img-dont-show");
  img_3_2.classList.add("img-dont-show");
  img_4_2.classList.add("img-dont-show");
  img_5_2.classList.add("img-dont-show");

  pointer_2.classList.add("img-goto-first");

  pointer_one_btn_2.classList.add("text-red");

  pointer_two_btn_2.classList.remove("text-red");
  pointer_three_btn_2.classList.remove("text-red");
  pointer_forth_btn_2.classList.remove("text-red");
  pointer_fifth_btn_2.classList.remove("text-red");

  pointer_two_btn_2.classList.add("text-disable");
  pointer_three_btn_2.classList.add("text-disable");
  pointer_forth_btn_2.classList.add("text-disable");
  pointer_fifth_btn_2.classList.add("text-disable");

  pointer_2.classList.remove(
    "img-goto-second",
    "img-goto-third",
    "img-goto-forth",
    "img-goto-fifth"
  );
});

pointer_two_2.addEventListener("click", () => {
  img_2_2.classList.remove("img-dont-show");

  img_1_2.classList.add("img-dont-show");
  img_3_2.classList.add("img-dont-show");
  img_4_2.classList.add("img-dont-show");
  img_5_2.classList.add("img-dont-show");

  pointer_two_btn_2.classList.add("text-red");

  pointer_one_btn_2.classList.remove("text-red");
  pointer_three_btn_2.classList.remove("text-red");
  pointer_forth_btn_2.classList.remove("text-red");
  pointer_fifth_btn_2.classList.remove("text-red");

  pointer_2.classList.add("img-goto-second");
  pointer_2.classList.remove(
    "img-goto-first",
    "img-goto-third",
    "img-goto-forth",
    "img-goto-fifth"
  );
});

pointer_three_2.addEventListener("click", () => {
  img_3_2.classList.remove("img-dont-show");

  img_1_2.classList.add("img-dont-show");
  img_2_2.classList.add("img-dont-show");
  img_4_2.classList.add("img-dont-show");
  img_5_2.classList.add("img-dont-show");

  pointer_three_btn_2.classList.add("text-red");

  pointer_one_btn_2.classList.remove("text-red");
  pointer_two_btn_2.classList.remove("text-red");
  pointer_forth_btn_2.classList.remove("text-red");
  pointer_fifth_btn_2.classList.remove("text-red");

  pointer_2.classList.add("img-goto-third");
  pointer_2.classList.remove(
    "img-goto-first",
    "img-goto-second",
    "img-goto-forth",
    "img-goto-fifth"
  );
});

pointer_forth_2.addEventListener("click", () => {
  img_4_2.classList.remove("img-dont-show");

  img_1_2.classList.add("img-dont-show");
  img_2_2.classList.add("img-dont-show");
  img_3_2.classList.add("img-dont-show");
  img_5_2.classList.add("img-dont-show");

  pointer_forth_btn_2.classList.add("text-red");

  pointer_one_btn_2.classList.remove("text-red");
  pointer_two_btn_2.classList.remove("text-red");
  pointer_three_btn_2.classList.remove("text-red");
  pointer_fifth_btn_2.classList.remove("text-red");

  pointer_2.classList.add("img-goto-forth");
  pointer_2.classList.remove(
    "img-goto-first",
    "img-goto-second",
    "img-goto-third",
    "img-goto-fifth"
  );
});

pointer_fifth_2.addEventListener("click", () => {
  img_5_2.classList.remove("img-dont-show");

  img_1_2.classList.add("img-dont-show");
  img_2_2.classList.add("img-dont-show");
  img_3_2.classList.add("img-dont-show");
  img_4_2.classList.add("img-dont-show");

  pointer_fifth_btn_2.classList.add("text-red");

  pointer_one_btn_2.classList.remove("text-red");
  pointer_two_btn_2.classList.remove("text-red");
  pointer_three_btn_2.classList.remove("text-red");
  pointer_forth_btn_2.classList.remove("text-red");

  pointer_2.classList.add("img-goto-fifth");
  pointer_2.classList.remove(
    "img-goto-first",
    "img-goto-second",
    "img-goto-third",
    "img-goto-forth"
  );
});
