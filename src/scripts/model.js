const openHamburger = document.getElementById("openHamburger");
const closeHamburger = document.getElementById("closeHamburger");
const hamburgerWrapper = document.querySelector(".hamburger-wrapper");

openHamburger.addEventListener("click", () => {
  hamburgerWrapper.classList.add("open");
  document.body.classList.add("no-scroll");
});

closeHamburger.addEventListener("click", () => {
  hamburgerWrapper.classList.remove("open");
  document.body.classList.remove("no-scroll");
});

const overlay = document.querySelector(".shared-overlay");
const body = document.body;

// Open any popup when a project container is clicked
document.querySelectorAll(".project-container").forEach((el) => {
  el.addEventListener("click", () => {
    const popupSelector = el.getAttribute("data-target");
    const popup = document.querySelector(popupSelector);

    // Close any currently open popup
    document
      .querySelectorAll(".popup.open")
      .forEach((p) => p.classList.remove("open"));

    // Open the target one
    popup.classList.add("open");
    overlay.classList.remove("hidden");
    body.classList.add("no-scroll");
  });
});

// Close popup when close button is clicked
document.querySelectorAll(".close-popup").forEach((btn) => {
  btn.addEventListener("click", () => {
    closeAllPopups();
  });
});

// Close popup when overlay is clicked
overlay.addEventListener("click", () => {
  closeAllPopups();
});

// Shared function to close everything
function closeAllPopups() {
  document
    .querySelectorAll(".popup.open")
    .forEach((p) => p.classList.remove("open"));
  overlay.classList.add("hidden");
  body.classList.remove("no-scroll");
}
