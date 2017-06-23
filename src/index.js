import AOS from 'aos';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { HashRouter, Route } from 'react-router-dom';


document.addEventListener("DOMContentLoaded", function() {
  // init animate on scroll
  AOS.init();
  // init smooth scrolling
  // $.srSmoothscroll({
  //   step: 90,
  //   speed: 300,
  //   ease: 'linear'
  // });
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
