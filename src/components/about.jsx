import React from 'react';

require('../styles/about.scss');
class About extends React.Component {
  constructor(props) {
    super(props);
  }
//#35b88f url("images/banner.svg") bottom center no-repeat
  render() {
    return (
      <section className="about container">
        <h2>ABOUT</h2>
        <img id="profile" src="assets/portfolio.png"></img>
        <p>
          It’s time for me to finally admit it out loud - I have a coding problem. In college, my passion for coding had manifested itself into a CS minor.
          In between my rigorous engineering courses, I always had one or two spare projects; even during finals week.
          The pinnacle of my epidemic transpired in my last occupation, when I became a full-stack engineer by day and structural Engineer-In-Traing (E.I.T)
          by late afternoon.
        </p>
        <p>
          In July of this year I graduated from a full-time web-development course with less than 3% acceptance rate.
          Finally, after 6 years of programming, I no longer have a coding problem; I now have a software-engineering career.
        </p>
      </section>
    );
  }
}

export default About;