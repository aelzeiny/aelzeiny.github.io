import Parallax from './parallax';
document.addEventListener("DOMContentLoaded", function() {
  const parallax = new Parallax();
  window.addEventListener("scroll", parallax.scroll);
});