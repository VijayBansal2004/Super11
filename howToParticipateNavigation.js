// How to participate Navigation Section

let participate_nav_links = document.querySelectorAll(".participate-nav-links");
let cricket_section = document.querySelector(".cricket-section");
let football_section = document.querySelector(".football-section");

cricket_section.classList.add("d-block");
football_section.classList.add("d-none");

for (let i = 0; i < participate_nav_links.length; i++) {
  participate_nav_links[0].addEventListener("click", () => {
    cricket_section.classList.replace("d-block", "d-none");
    football_section.classList.replace("d-none", "d-block");
  });

  participate_nav_links[1].addEventListener("click", () => {
    football_section.classList.replace("d-block", "d-none");
    cricket_section.classList.replace("d-none", "d-block");
  });
}
