import React from 'react';
import ProjectItem from './project-item';

require('../styles/projects.scss');

export default function Projects(props) {
    return (
        <section>
            <h2 data-aos="fade-up">PROJECTS</h2>
            <div className="container flexbox" id="projects">
                <div className="two-column">
                    <ProjectItem title="CloudCasts - Podcasts Service" aos="zoom-in-left"/>
                    <ProjectItem title="Subdivisionary - San Francisco Public Works Website" aos="zoom-in-right"/>
                </div>
                <div className="two-column">
                    <ProjectItem title="Build-A-Mesh - Level Generation Tool" aos="zoom-in-right"/>
                    <ProjectItem title="CAST2000 - Canoe Hull Structural Analyzer" aos="zoom-in-right"/>
                </div>
                {/*<div className="two-column">
                    <ProjectItem title="Data-Structures in 1000 Words" aos="zoom-in-left"/>
                    <ProjectItem title="Synapsis - Machine Learning Visualization" aos="zoom-in-left"/>
                </div>*/}
            </div>
        </section>
    );
}