import React from 'react';
import ModalComponent from './modal_component';

require('../styles/resume_modal.scss');

class ResumeModal extends ModalComponent {
  constructor(props) {
    super(props);
  }

  renderModal() {
    return (
        <div className="resume">
          <div className="download">
            <a><i className="fa fa-pdf-o"></i></a><br/>
            <h4>Made in HTML</h4>
          </div>
          <div className="full-screen container">
            <header>
              <img id="header-mugshot" src="assets/Profile Picture-alt.png"></img>
              <div id="header-name">
                <b>AHMED</b>
                <div className="header-last-name">
                  Elzeiny
                </div>
                <div className="header-titles">
                  Software Engineer
                </div>
              </div>
              <ul id="header-icons">
                <li className="header-icon">
                  <a href="mailto:ahmed.elzeiny@gmail.com" target="_blank">
                    <i className="flaticon flaticon-multimedia"></i>
                    ahmed.elzeiny@gmail.com
                  </a>
                </li>
                <li className="header-icon">
                  <i className="flaticon flaticon-phone-symbol-of-an-auricular-inside-a-circle"></i>
                  408-458-0241
                </li>
                <li className="header-icon">
                  <a href="https://www.linkedin.com/in/aelzeiny" target="_blank">
                    <i className="flaticon flaticon-linkedin-button"></i>
                    /in/aelzeiny/
                  </a>
                </li>
                <li className="header-icon">
                  <a href="http://www.elzeiny.io" target="_blank">
                    <i className="flaticon flaticon-internet"></i>
                    elzeiny.io
                  </a>
                </li>
              </ul>
            </header>
            <div className="body">
              <nav>
                <section>
                  <h2>EDUCATION</h2>
                  <h3 className="edu">San Jose State University</h3>
                  <div className="indent">
                    <p>B.S Civil Engineering</p>
                    <p>Minor Computer Science</p>
                  </div>
                  <h3>App Academy</h3>
                  <div className="indent">
                    <p>Web-Development</p>
                    <p>Mar 2017 - Jun 2017</p>
                  </div>
                </section>
                <section className="borderless">
                  <h2>SKILLS</h2>
                  <h3>FRONT-END</h3>
                  <ul className="skills">
                    <li><p>React </p><div className="star-ranking"><div className="star-5">★★★★★</div></div></li>
                    <li><p>Redux</p><div className="star-ranking"><div className="star-5">★★★★★</div></div></li>
                    <li><p>Vue</p><div className="star-ranking"><div className="star-4-5">★★★★★</div></div></li>
                    <li><p>CSS/SASS</p><div className="star-ranking"><div className="star-5">★★★★★</div></div></li>
                    <li><p>HTML 5</p><div className="star-ranking"><div className="star-5">★★★★★</div></div></li>
                    <li><p>jQuery</p><div className="star-ranking"><div className="star-5">★★★★★</div></div></li>
                    <li><p>Bootstrap</p><div className="star-ranking"><div className="star-5">★★★★★</div></div></li>
                    <li><p>D3</p><div className="star-ranking"><div className="star-4">★★★★★</div></div></li>
                  </ul>
                  <h3>BACK-END</h3>
                  <ul className="skills">
                    <li><p>Ruby on Rails</p><div className="star-ranking"><div className="star-5">★★★★★</div></div></li>
                    <li><p>PostgreSQL</p><div className="star-ranking"><div className="star-4">★★★★★</div></div></li>
                    <li><p>NodeJS</p><div className="star-ranking"><div className="star-3-5">★★★★★</div></div></li>
                    <li><p>ASP.NET</p><div className="star-ranking"><div className="star-5">★★★★★</div></div></li>
                  </ul>
                  <h3>Tooling</h3>
                  <ul className="skills">
                    <li><p>Heroku</p><div className="star-ranking"><div className="star-5">★★★★★</div></div></li>
                    <li><p>AWS</p><div className="star-ranking"><div className="star-3-5">★★★★★</div></div></li>
                    <li><p>Webpack</p><div className="star-ranking"><div className="star-4">★★★★★</div></div></li>
                    <li><p>Git</p><div className="star-ranking"><div className="star-5">★★★★★</div></div></li>
                  </ul>
                  <h3>Languages</h3>
                  <ul className="skills">
                    <li><p>C#</p><div className="star-ranking"><div className="star-5">★★★★★</div></div></li>
                    <li><p>Ruby</p><div className="star-ranking"><div className="star-5">★★★★★</div></div></li>
                    <li><p>JavaScript</p><div className="star-ranking"><div className="star-5">★★★★★</div></div></li>
                    <li><p>Java</p><div className="star-ranking"><div className="star-5">★★★★★</div></div></li>
                    <li><p>English</p><div className="star-ranking"><div className="star-5">★★★★★</div></div></li>
                  </ul>
                </section>
              </nav>
              <article>
                <section>
                  <h2>PROFESSIONAL EXPERIENCE</h2>
                  <h3>FULLSTACK ENGINEER</h3>
                  <h4>DEPARTMENT OF PUBLIC WORKS – SAN FRANCISCO, CA, JUNE 2016 – MARCH 2017</h4>
                  <ul>
                    <li>Conceptualized, designed, and built user and staff friendly automation websites </li>
                    <li>Saved 160 weekly staff-hours by overhauling all procedures and systems to tailored digital alternatives</li>
                  </ul>
                  <h3>STRUCTURAL ENGINEER-IN-TRAINING</h3>
                  <h4>UMERANI ASSOCIATES DRAFTING DEPT. – PALO ALTO, CA, JUNE 2014 – SEPTEMBER 2014</h4>
                  <ul>
                    <li>Modernized a library of macros for efficiency using AUTOLISP, shaving an average of 20 minutes each time a new .dwg file is created</li>
                    <li>Demonstrated efficiency by writing scripts that computed complex calculations</li>
                  </ul>
                </section>
                <section className="borderless">
                  <h2>SOFTWARE ENGINEERING PROJECTS</h2>
                  <h3>
                    Cloud Casts 
                    <span className="links">
                      <a href="https://github.com/aelzeiny/CloudCasts"><i className="fa fa-github"></i></a>
                      <a href="cloudcast.life"><i className="fa fa-external-link-square"></i></a>
                    </span>
                  </h3>
                  <h4>React, Redux, Ruby on Rails, PostgreSQL, ES6</h4>
                  <ul>
                    <li>Developed a fully-featured podcast site that fetches live data for searching, browsing, and playing podcast episodes in real-time</li>
                    <li>Designed an original, mobile-responsive UI/UX with modular screen layouts</li>
                    <li>
                      Implemented an image sampling algorithm that derives contrasting colors to dynamically generate asthetically pleasing color pallets
                    </li>
                  </ul>
                  <h3>
                    SF Subdivision Application System 
                    <span className="links">
                      <a href="https://github.com/aelzeiny/Subdivisionary"><i className="fa fa-github"></i></a>
                      <a href="http://ccsfsubdivision.azurewebsites.net/"><i className="fa fa-external-link-square"></i></a>
                    </span>
                  </h3>
                  <h4>ASP.NET Core, Entity Framework, Identity Framework, Code-First Workflow</h4>
                  <ul>
                      <li>Self-taught in ASP.NET with Identity and Entity Code-First Frameworks in 5 days</li>
                      <li>
                        Standardized an online application system resulting in the completion of 3 months of backlogged projects within a timespan of week and a half.
                      </li>
                      <li>
                        Converted a total of eight applications and 64 highly modular forms, all redesigned for a mobile-responsive and streamlined experience.
                      </li>
                  </ul>
                  <h3>
                    Synapsis, Machine Learning Visualization 
                    <span className="links">
                      <a href="https://github.com/ml653/synapsis" target="_blank"><i className="fa fa-github"></i></a>
                      <a href="https://synapsis-app.herokuapp.com/" target="_blank"><i className="fa fa-external-link-square"></i></a>
                    </span>
                  </h3>
                  <h4>JavaScript ES6, Vue, D3, Webworker</h4>
                  <ul>
                    <li>
                      Implemented and visualized a convolutional neural network that learns how to recognize handwriting from from the MNIST dataset
                    </li>
                  </ul>
                  <h3>
                    Procedural Level Pathfinder 
                    <span className="links">
                      <a href="https://github.com/aelzeiny/Build-A-Mesh-Workshop" target="_blank"><i className="fa fa-github"></i></a>
                      <a href="https://aelzeiny.github.io/Build-A-Mesh-Workshop" target="_blank"><i className="fa fa-external-link-square"></i></a>
                    </span>
                  </h3>
                  <ul>
                    <li>
                      Implemented and depicted the Cellular Automa level generation algorithm, Polygon Addition and Subtraction algorithms,
                      Concave Mesh generation, and A* Pathfinding
                    </li>
                  </ul>
                  <h3>
                    Data-Structures in 1000 words 
                    <span className="links">
                        <a href="" target="_blank"><i className="fa fa-github"></i></a>
                        <a href="" target="_blank"><i className="fa fa-external-link-square"></i></a>
                    </span>
                  </h3>
                  <ul>
                    <li>
                      Implemented interactive animations for 12 essential data-structures often taught in upper-division CS classes
                    </li>
                  </ul>
                </section>
              </article>
            </div>
          </div>
        </div>
    );
  }
}

export default ResumeModal;