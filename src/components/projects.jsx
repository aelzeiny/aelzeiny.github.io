import React from 'react';
import ProjectItem from './project_item';

require('../styles/projects.scss');

export default function Projects(props) {
    return (
        <section>
            <h2 data-aos="fade-up">PROJECTS</h2>
            <div className="container flexbox" id="projects">
                <div className="two-column">
                    <ProjectItem title="Twitch Roulette - Remote control my Nintendo Switch" img="TwitchArena.png" aos="zoom-in-left"/>
                    <ProjectItem title="Synapsis - Machine Learning Visualization" img="Synapsis.png" aos="zoom-in-right"/>
                </div>
                <div className="two-column">
                    <ProjectItem title="CloudCasts - Podcasts Service" img="Cloudcasts.PNG" aos="zoom-in-left"/>
                    <ProjectItem title="Build-A-Mesh - Level Generation Tool" img="Wek.png" aos="zoom-in-right"/>
                </div>
                <div className="two-column">
                    <ProjectItem title="Subdivisionary - San Francisco Public Works Website" img="SAS.png" aos="zoom-in-left"/>
                    <ProjectItem title="CAST2000 - Canoe Hull Structural Analyzer" img="Cast2000.PNG" aos="zoom-in-right"/>
                </div>
                <div className="two-column"></div>
            </div>
        </section>
    );
}