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

            <p>This portfolio is made<br/> in React</p><br/>
            <p>This resume is 100%<br/>HTML and CSS</p><br/>
            <a href="assets/projects/Elzeiny_Resume_2017.pdf" download><i className="fa fa-file-pdf-o fa-6"></i><br/>PDF Download</a>
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
                <section className="skills-section">
                  <h2>SKILLS</h2>
                  <h3>Data</h3>
                  <ul className="skills">
                    <li><p>Airflow</p>
                      <div className="star-ranking"></div>
                    </li>
                    <li><p>Kafka</p>
                      <div className="star-ranking"></div>
                    </li>
                    <li><p>Spark</p>
                      <div className="star-ranking"></div>
                    </li>
                    <li><p>Hadoop Ecosystem</p>
                      <div className="star-ranking"></div>
                    </li>
                  </ul>
                  <h3>Backend</h3>
                  <ul className="skills">
                    <li><p>Docker</p>
                      <div className="star-ranking"></div>
                    </li>
                    <li><p>AWS Lambda</p>
                      <div className="star-ranking"></div>
                    </li>
                    <li><p>AWS ECS/Fargate</p>
                      <div className="star-ranking"></div>
                    </li>
                    <li><p>AWS CloudFormation</p>
                      <div className="star-ranking"></div>
                    </li>
                  </ul>
                  <h3>Databases</h3>
                  <ul className="skills">
                    <li><p>MySQL, PostgreSQL</p>
                      <div className="star-ranking"></div>
                    </li>
                    <li><p>Elastic Search</p>
                      <div className="star-ranking"></div>
                    </li>
                    <li><p>Redis</p>
                      <div className="star-ranking"></div>
                    </li>
                    <li><p>Neo4j, OrientDB</p>
                      <div className="star-ranking"></div>
                    </li>
                    <li><p>Presto, Hive, Impala</p>
                      <div className="star-ranking"></div>
                    </li>
                  </ul>
                  <h3>Languages</h3>
                  <ul className="skills">
                    <li><p>Python</p>
                      <div className="star-ranking"></div>
                    </li>
                    <li><p>Java</p>
                      <div className="star-ranking"></div>
                    </li>
                    <li><p>C#</p>
                      <div className="star-ranking"></div>
                    </li>
                    <li><p>Ruby</p>
                      <div className="star-ranking"></div>
                    </li>
                    <li><p>JavaScript</p>
                      <div className="star-ranking"></div>
                    </li>
                    <li><p>Friendship</p>
                      <div className="star-ranking"></div>
                    </li>
                  </ul>
                </section>
                <section className="education-section">
                  <h2>EDUCATION</h2>
                  <h3>San Jose State</h3>
                  <div className="indent">
                    <p><b>Aug 2011 - May 2016</b></p>
                    <p>Minor Computer Sci</p>
                    <p>Minor Mathmatics</p>
                    <p>B.S Civil Engineering</p>
                  </div>
                </section>
                <section className="borderless">
                  <h2>CERTIFICATES</h2>
                  <ul className="skills">
                    <li><p>AWS Associate Developer</p></li>
                    <li><p>Engineer-In-Training</p></li>
                    <li><p>Google Analytics</p></li>
                  </ul>
                </section>
              </nav>
              <article>
                <section>
                  <h2>PROFESSIONAL EXPERIENCE</h2>
                  <h3>SENIOR DATA ENGINEER + TECH LEAD</h3>
                  <h4>LEANTAAS - SANTA CLARA, CA, JUNE 2017 – PRESENT</h4>
                  <ul>
                    <li>Lead team of >10 engineers</li>
                    <li>Architected data pipeline from scratch for both batch and stream data</li>
                    <li>Designed resilient jobs to extract highly sensitive (PHI) data from hospitals</li>
                    <li>Introduced new technologies like Apache Airflow, and AWS Athena/Lambda/Fargate with minimal
                      supervision
                    </li>
                    <li>Deprecated graph (OrientDB) database and spark cluster to reduce AWS billing</li>
                    <li>Created new data-sets for for application, PM, DS, and Data Analyst teams</li>
                    <li>Upheld high standards with code reviews, 1-on-1s, unit and "Data Quality" tests</li>
                    <li>At LeanTaaS data is king. The pipeline can never fail for any reason</li>
                    <li>Wore multiple hats as engineer, product-manager, manager, and dev-ops</li>
                  </ul>
                  <h3>FULLSTACK ENGINEER</h3>
                  <h4>DEPARTMENT OF PUBLIC WORKS – SAN FRANCISCO, CA, JUNE 2016 – MARCH 2017</h4>
                  <ul>
                    <li>Full-Stack in ASP.NET + Entity Framework, Java Spring + Hibernate, and React</li>
                    <li>Conceptualized, designed, and built user and staff friendly automation websites</li>
                    <li>Saved 160 weekly staff-hours by overhauling all procedures and systems to tailored digital
                      alternatives
                    </li>
                  </ul>
                </section>
                <section className="borderless">
                  <h2>SOFTWARE ENGINEERING PROJECTS</h2>
                  <div>
                    <h3>
                      Apache Airflow - Open Source Contributions
                      <span className="links">
                <a href="https://github.com/aelzeiny/airflow/pull/1/files"><i className="fa fa-github"></i></a>
                <a href="https://github.com/apache/airflow/pull/7030"><i className="fa fa-external-link-square"></i></a>
              </span>
                      <h4>Apache Airflow, AWS Fargate, Docker</h4>
                      <ul>
                        <li>Conceptualized the Fargate Executor as a core component to Airflow</li>
                        <li>Created an AWS Auto-Scaling Cloud-Formation Stack which dynamically provisions new servers
                          based on worker capacity
                        </li>
                      </ul>
                    </h3>
                  </div>
                  <div>
                    <h3>
                      PHIlter, Hackaton Winner
                      <span className="links">
                  <a href="https://leanmachine.fastlizard4.org/MLaaS/"><i
                      className="fa fa-external-link-square"></i></a>
                </span>
                    </h3>
                    <h4>React, Redux, Flask, Fargate, SQS, API Gateways</h4>
                    <ul>
                      <li>Won 1st place at company hackaton for best ML product; I am not a DS</li>
                      <li>Implemented paper on natural-language processing (NLP) to detect patient-health-information
                        (PHI)
                      </li>
                      <li>Aggregated data and normalized unstructured datasets</li>
                      <li>Wrote a serverless architecture for real-time processing in AWS</li>
                    </ul>
                  </div>
                  <div>
                    <h3>
                      Synapsis, Machine Learning Visualization
                      <span className="links">
                  <a href="https://github.com/ml653/synapsis" target="_blank"><i className="fa fa-github"></i></a>
                  <a href="https://synapsis-app.herokuapp.com/" target="_blank"><i
                      className="fa fa-external-link-square"></i></a>
                </span>
                    </h3>
                    <h4>JavaScript ES6, Vue, D3, Webworker</h4>
                    <ul>
                      <li>
                        Implemented and visualized a convolutional neural network that learns how to recognize
                        handwriting in pure JS from from the MNIST dataset
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3>
                      This Resume
                      <span className="links">
                  <a href="https://github.com/aelzeiny/Resume/blob/master/resume.html" target="_blank"><i
                      className="fa fa-github"></i></a>
                  <a href="http://www.elzeiny.io" target="_blank"><i className="fa fa-external-link-square"></i></a>
                </span>
                    </h3>
                    <ul>
                      <li>
                        Brought to you in HTML & CSS
                      </li>
                    </ul>
                  </div>
                </section>
              </article>
            </div>
          </div>
        </div>
    );
  }
}

export default ResumeModal;
