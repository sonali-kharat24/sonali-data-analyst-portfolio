// Sonali Kharat - Portfolio interactions
// Small, dependency-free script. The site still works if this file fails to load.
 
(function () {
  "use strict";
 
  // Mark JS as available so the reveal animation only applies when it can run.
  document.documentElement.classList.add("js");
 
  // ---------- Mobile menu ----------
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");
 
  function closeMenu() {
    if (!toggle || !links) return;
    links.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }
 
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
 
    // Close the menu after choosing a link
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") closeMenu();
    });
 
    // Close with the Escape key
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });
  }
 
  // ---------- Footer year ----------
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
 
  // ---------- Scroll reveal ----------
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { revealObserver.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("visible"); });
  }
 
  // ---------- Highlight the current section in the nav ----------
  var navAnchors = document.querySelectorAll(".nav-links a[href^='#']");
  var sections = [];
  navAnchors.forEach(function (a) {
    var target = document.querySelector(a.getAttribute("href"));
    if (target) sections.push({ link: a, el: target });
  });
 
  if ("IntersectionObserver" in window && sections.length) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          sections.forEach(function (s) {
            var active = s.el === entry.target;
            s.link.classList.toggle("active", active);
            if (active) s.link.setAttribute("aria-current", "true");
            else s.link.removeAttribute("aria-current");
          });
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(function (s) { spy.observe(s.el); });
  }
})();
 