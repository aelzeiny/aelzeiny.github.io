import AOS from 'aos';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { HashRouter, Route } from 'react-router-dom';


document.addEventListener("DOMContentLoaded", function() {
  // init animate on scroll
  AOS.init();
  // init smooth scrolling
  // checkSmoothScroll();
  const RoutedApp = (props) => {
    return (
      <HashRouter>
        <App />
      </HashRouter>
    );
  };
  const root = document.getElementById("root");
  ReactDOM.render(<RoutedApp/>, root);
});

// function checkSmoothScroll() {
// 	let platform = navigator.platform.toLowerCase();
// 	if ((platform.indexOf('win32') != -1 || platform.indexOf('linux') != -1) && $.browser.webkit)
// 	{
//     $.srSmoothscroll({
//       step: 90,
//       speed: 300,
//       ease: 'linear'
//     });
// 	}
// }