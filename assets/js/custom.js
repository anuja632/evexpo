/* ---------------------------------------------------
   CUSTOM JS – EV Expo Website
   --------------------------------------------------- */

   window.addEventListener("load", function() {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.style.display = "none";
  }
});

/* ------------------------
   1. Navbar Scroll Sticky
--------------------------- */
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar-custom");

    if (window.scrollY > 20) {
        navbar.classList.add("nav-scroll-active");
    } else {
        navbar.classList.remove("nav-scroll-active");
    }
});

/* -----------------------------------------
   2. Mobile Offcanvas Auto-Close on Click
-------------------------------------------- */
document.querySelectorAll(".offcanvas .nav-link").forEach(link => {
    link.addEventListener("click", () => {
        const offcanvasElement = document.querySelector("#mobileMenu");
        const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasElement);
        offcanvasInstance.hide();
    });
});

/* ------------------------------------
   3. Owl Carousel – Home Banner
-------------------------------------- */
$(document).ready(function () {
    $(".home-banner-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
        smartSpeed: 800,
        dots: true,
        nav: false
    });
});

/* ------------------------------------
   4. Smooth Scroll for Internal Links
-------------------------------------- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
});
