/* ---------------------------------------------------
   CUSTOM JS – EV Expo Website
   --------------------------------------------------- */

   window.addEventListener("load", function() {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.style.display = "none";
  }
});

const targetDate = new Date("Nov 20, 2026 00:00:00").getTime();

const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000*60*60*24));
    const hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
    const seconds = Math.floor((distance % (1000*60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours.toString().padStart(2,'0');
    document.getElementById("minutes").innerText = minutes.toString().padStart(2,'0');
    document.getElementById("seconds").innerText = seconds.toString().padStart(2,'0');

    if(distance < 0) {
        clearInterval(timer);
        document.querySelector(".timer").innerHTML = "<h3>Event Started!</h3>";
    }
},1000);
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
