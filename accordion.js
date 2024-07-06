document.addEventListener("DOMContentLoaded", function () {
  const accordion = document.querySelectorAll(".accordion");
  const accordion_header = document.querySelectorAll(".accordion-header");
  const accordion_button = document.querySelectorAll(".accordion-button");
  const pointer = document.querySelector(".pointer");
  // const pointer_2 = document.querySelector(".pointer-2");
  const pointer_points = ["first", "second", "third", "forth", "fifth"];

  const imgs = document.querySelectorAll(".imgs");

  accordion_header.forEach((accordion_header, index) => {
    accordion_header.addEventListener("click", () => {
      // Hide all images
      imgs.forEach((img) => img.classList.add("img-dont-show"));

      // Show the selected image
      imgs[index].classList.remove("img-dont-show");

      // Reset all button colors
      accordion_button.forEach((btn) => {
        btn.classList.remove("text-red");
        btn.classList.add("text-disable");

        // Adding the (img-goto-...) into the pointer when the accordion-button is clicked
        pointer.classList.add(`img-goto-${pointer_points[index]}`);

        // Removing all rest of the (img-goto-...) from the pointer when a perticular accordion -button is clicked
        pointer_points.forEach((point, i) => {
          if (i !== index) {
            pointer.classList.remove(`img-goto-${point}`);
          }
        });
      });

      // Highlight the selected button
      accordion_button[index].classList.add("text-red");
      accordion_button[index].classList.remove("text-disable");
    });
  });

  // Initialize the first pointer section
  accordion_header[0].click();
});
