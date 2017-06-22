import AOS from 'aos';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';


document.addEventListener("DOMContentLoaded", function() {
  // init animate on scroll
  AOS.init();
  // init smooth scrolling
  $.srSmoothscroll({
    step: 90,
    speed: 300,
    ease: 'linear'
  });

  const root = document.getElementById("root");
  ReactDOM.render(<App/>, root);
});
