let accordion_collapse = document.querySelectorAll(".accordion-collapse");
let accordion_button = document.querySelectorAll(".accordion-button");

function checkMediaQuery() {
  if (window.innerWidth < 500) {
    for (let i = 0; i < accordion_button.length; i++) {
      accordion_button[i].classList.add("text-red");
    }

    for (let i = 0; i < accordion_collapse.length; i++) {
      accordion_collapse[i].classList.add("show");
    }
  } else {
    for (let i = 1; i < accordion_button.length; i++) {
      accordion_button[i].classList.remove("text-red");
    }

    for (let i = 1; i < accordion_collapse.length; i++) {
      accordion_collapse[i].classList.remove("show");
    }
  }
}
window.addEventListener("resize", checkMediaQuery);
