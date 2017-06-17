import Parallax from './parallax';

function castSmoothScroll() {
  console.log($.srSmoothscroll);
  $.srSmoothscroll({
    step: 90,
    speed: 300,
    ease: 'linear'
  });
}

document.addEventListener("DOMContentLoaded", function() {
  const views = document.querySelectorAll(".parallax");
  const parallax = new Parallax(views);
  window.addEventListener("scroll", parallax.scroll);

  castSmoothScroll();
});