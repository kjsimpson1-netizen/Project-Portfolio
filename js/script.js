/* =========================================================
   LOAD NAVBAR
   ========================================================= */

fetch("components/navbar.html")
  .then(response => response.text())
  .then(data => {

    document.getElementById("navbar").innerHTML = data;

    


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


    /* Load saved theme */

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {

      document.documentElement.setAttribute("data-theme", "dark");

      if (themeSwitch) {
        themeSwitch.checked = true;
      }

    } else {

      document.documentElement.removeAttribute("data-theme");

      if (themeSwitch) {
        themeSwitch.checked = false;
      }

    }


    /* Change theme when toggle is clicked */

    if (themeSwitch) {

      themeSwitch.addEventListener("change", () => {

        if (themeSwitch.checked) {

          document.documentElement.setAttribute("data-theme", "dark");

          localStorage.setItem("theme", "dark");

        } else {

          document.documentElement.removeAttribute("data-theme");

          localStorage.setItem("theme", "light");

        }

      });

    }

  });


/* =========================================================
   LOAD FOOTER
   ========================================================= */

fetch("foot.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  });


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