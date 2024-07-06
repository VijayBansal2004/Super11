let sections = document.querySelectorAll(".hotsport-points-t20");
let links = document.querySelectorAll(".hotsport-nav-links");

// Function to show the selected section and hide others
function showSection(selectedClass) {
  sections.forEach((section) => {
    if (section.classList.contains(selectedClass)) {
      section.classList.remove("d-none");
      section.classList.add("d-block");
    } else {
      section.classList.remove("d-block");
      section.classList.add("d-none");
    }
  });
}

// Set up event listeners for each link
links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    let sectionClass = link.classList[1].replace("-link", "-section");
    showSection(sectionClass);
  });
});

// Initial display setup
showSection("t20-section");
