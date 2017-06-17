import Parallax from './parallax';
import AOS from 'aos';

document.addEventListener("DOMContentLoaded", function() {
  const views = document.querySelectorAll(".parallax");
  const parallax = new Parallax(views);
  window.addEventListener("scroll", parallax.scroll);
  AOS.init();
  
  $.srSmoothscroll({
    step: 90,
    speed: 300,
    ease: 'linear'
  });
});