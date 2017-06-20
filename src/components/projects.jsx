import React from 'react';

require('../styles/projects.scss');

export default function Projects(props) {
    return (
        <section>
            <h2>PROJECTS</h2>
            <div  className="flexbox" id="projects">
                <div className="two-column">
                <img src="https://unsplash.it/500/500/?random" data-aos="fade-left"></img>
                <img src="https://unsplash.it/500/500/?random" data-aos="fade-right"></img>
                </div>
                <div className="two-column">
                <img src="https://unsplash.it/500/500/?random" data-aos="fade-left"></img>
                <img src="https://unsplash.it/500/500/?random" data-aos="fade-right"></img>
                </div>
                <div className="two-column">
                <img src="https://unsplash.it/500/500/?random" data-aos="fade-left"></img>
                <img src="https://unsplash.it/500/500/?random" data-aos="fade-right"></img>
                </div>
                <div className="two-column">
                <img src="https://unsplash.it/500/500/?random" data-aos="fade-left"></img>
                <img src="https://unsplash.it/500/500/?random" data-aos="fade-right"></img>
                </div>
            </div>
        </section>
    );
}