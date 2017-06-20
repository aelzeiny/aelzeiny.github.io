import React from 'react';

require('../styles/projects.scss');

export default function Projects(props) {
    return (
        <section>
            <h2 data-aos="fade-up">PROJECTS</h2>
            <div className="container flexbox" id="projects">
                <div className="two-column">
                <img src="https://unsplash.it/500/500/?random" data-aos="zoom-in-left"></img>
                <img src="https://unsplash.it/500/500/?random" data-aos="zoom-in-right"></img>
                </div>
                <div className="two-column">
                <img src="https://unsplash.it/500/500/?random" data-aos="zoom-in-left"></img>
                <img src="https://unsplash.it/500/500/?random" data-aos="zoom-in-right"></img>
                </div>
                <div className="two-column">
                <img src="https://unsplash.it/500/500/?random" data-aos="zoom-in-left"></img>
                <img src="https://unsplash.it/500/500/?random" data-aos="zoom-in-right"></img>
                </div>
                <div className="two-column">
                <img src="https://unsplash.it/500/500/?random" data-aos="zoom-in-left"></img>
                <img src="https://unsplash.it/500/500/?random" data-aos="zoom-in-right"></img>
                </div>
            </div>
        </section>
    );
}