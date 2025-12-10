/* ---------------------------------------------------
   CUSTOM JS – EV Expo Website
   --------------------------------------------------- */

   window.addEventListener("load", function() {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.style.display = "none";
  }
});
  (function(){
    // Helper: format with commas
    function numberWithCommas(x){
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const stats = document.querySelectorAll('.stat-number');
    let started = false;

    if('IntersectionObserver' in window && stats.length){
      const io = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if(entry.isIntersecting){
            const el = entry.target;
            if(el.getAttribute('data-started')) return;
            el.setAttribute('data-started', 'true');
            const target = parseInt(el.dataset.target, 10) || 0;
            const duration = 1600; // ms
            const frameRate = 50; // ms
            const totalFrames = Math.round(duration / frameRate);
            let frame = 0;
            const isLarge = target > 999;
            const step = target / totalFrames;

            const counter = setInterval(() => {
              frame++;
              const current = Math.min(Math.round(step * frame), target);
              el.textContent = isLarge ? numberWithCommas(current) : current;
              if(frame >= totalFrames){
                el.textContent = isLarge ? numberWithCommas(target) : target;
                clearInterval(counter);
              }
            }, frameRate);

            // optionally unobserve
            observer.unobserve(el);
          }
        });
      }, { threshold: 0.45 });

      stats.forEach(s => io.observe(s));
    } else {
      // fallback: instantly fill
      stats.forEach(el => {
        const target = parseInt(el.dataset.target, 10) || 0;
        el.textContent = target.toLocaleString();
      });
    }
  })();

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

  const scrollBtn = document.getElementById("scrollTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
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
