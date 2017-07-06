import React from 'react';

require('../styles/about.scss');
class About extends React.Component {
  constructor(props) {
    super(props);
  }
//#35b88f url("images/banner.svg") bottom center no-repeat
  render() {
    return (
      <section className="about container" data-aos="fade-up">
        <h2>ABOUT</h2>
        <div id="existential-text">
          <img id="profile" src="assets/portfolio.png"></img>
          <div>
            <p>
              It’s time for me to finally admit it out loud - <b>I have a coding problem</b>. In college, my <b>passion</b> for
              coding had <b>manifested</b> itself into a CS minor.
              In between my rigorous engineering courses, I always had one or two <b>spare</b> projects; even during finals week.
              The pinnacle of my <b>epidemic</b> transpired in my last occupation,when I became a full-stack engineer by <b>day</b> and structural
              Engineer-In-Training (E.I.T) by <b>late afternoon</b>.
            </p>
            <p>
              In June of last year I <b>graduated</b> from civil to full-stack engineering for the City and County of San Francisco.
              Finally, after 6 years of programming, I no longer have a coding <b>problem</b>; I now have a software-engineering <b>career</b>.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default About;