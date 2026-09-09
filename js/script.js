/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");


/* Open / close mobile menu */
if (hamburger && navMenu) {
  hamburger.addEventListener("click", mobileMenu);
}

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}


/* Close navbar when a link is clicked */
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

function closeMenu() {
  if (hamburger && navMenu) {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
}


/* =========================================================
   DARK / LIGHT MODE
   ========================================================= */

const themeSwitch = document.getElementById("switch");


/* ---------------------------------------------------------
   Load saved theme
   --------------------------------------------------------- */

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.documentElement.classList.add("dark");

  if (themeSwitch) {
    themeSwitch.checked = true;
  }
}


/* ---------------------------------------------------------
   Change theme when toggle is clicked
   --------------------------------------------------------- */

if (themeSwitch) {
  themeSwitch.addEventListener("change", () => {

    if (themeSwitch.checked) {

      // Enable dark mode
      document.documentElement.classList.add("dark");

      // Save preference
      localStorage.setItem("theme", "dark");

    } else {

      // Enable light mode
      document.documentElement.classList.remove("dark");

      // Save preference
      localStorage.setItem("theme", "light");

    }

  });
}


/* =========================================================
   CURRENT YEAR
   ========================================================= */

const myDate = document.querySelector("#datee");

if (myDate) {
  myDate.innerHTML = new Date().getFullYear();
}


/* =========================================================
   CONTACT DROPDOWN
   ========================================================= */

document.addEventListener("click", function (event) {

  const dropdowns = document.querySelectorAll("details");

  dropdowns.forEach(function (dropdown) {

    if (!dropdown.contains(event.target)) {
      dropdown.removeAttribute("open");
    }

  });

});