import Parallax from './parallax';
document.addEventListener("DOMContentLoaded", function() {
  const views = document.querySelectorAll(".parallax");
  const parallax = new Parallax(views);
  window.addEventListener("scroll", parallax.scroll);
});