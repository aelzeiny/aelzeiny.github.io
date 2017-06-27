import React from 'react';
import ProjectItem from './project_item';

require('../styles/projects.scss');

export default function Projects(props) {
    return (
        <section>
            <h2 data-aos="fade-up">PROJECTS</h2>
            <div className="container flexbox" id="projects">
                <div className="two-column">
                    <ProjectItem title="CloudCasts - Podcasts Service" img="Cloudcasts.png" aos="zoom-in-left"/>
                    <ProjectItem title="Subdivisionary - San Francisco Public Works Website" img="SAS.png" aos="zoom-in-right"/>
                </div>
                <div className="two-column">
                    <ProjectItem title="Build-A-Mesh - Level Generation Tool" img="Wek.png" aos="zoom-in-left"/>
                    <ProjectItem title="CAST2000 - Canoe Hull Structural Analyzer" img="Cast2000.png" aos="zoom-in-right"/>
                </div>
                {/*<div className="two-column">
                    <ProjectItem title="Data-Structures in 1000 Words" aos="zoom-in-left"/>
                    <ProjectItem title="Synapsis - Machine Learning Visualization" aos="zoom-in-left"/>
                </div>*/}
            </div>
        </section>
    );
}