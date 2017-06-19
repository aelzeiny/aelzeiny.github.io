import AOS from 'aos';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

require('../src/styles/application.scss');
require('../src/styles/projects.scss');
require('../src/styles/skills.scss');
require('../src/styles/contact.scss');

document.addEventListener("DOMContentLoaded", function() {
  // init animate on scroll
  AOS.init();
  // init smooth scrolling
  // $.srSmoothscroll({
  //   step: 90,
  //   speed: 300,
  //   ease: 'linear'
  // });

  const root = document.getElementById("root");
  ReactDOM.render(<App/>, root);
});
