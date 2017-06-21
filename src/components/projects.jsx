import React from 'react';
import ProjectItem from './project-item';

require('../styles/projects.scss');

export default function Projects(props) {
    return (
        <section>
            <h2 data-aos="fade-up">PROJECTS</h2>
            <div className="container flexbox" id="projects">
                <div className="two-column">
                    <ProjectItem aos="zoom-in-left"/>
                    <ProjectItem aos="zoom-in-right"/>
                </div>
                <div className="two-column">
                    <ProjectItem aos="zoom-in-left"/>
                    <ProjectItem aos="zoom-in-right"/>
                </div>
                <div className="two-column">
                    <ProjectItem aos="zoom-in-left"/>
                    <ProjectItem aos="zoom-in-right"/>
                </div>
                <div className="two-column">
                    <ProjectItem aos="zoom-in-left"/>
                    <ProjectItem aos="zoom-in-right"/>
                </div>
            </div>
        </section>
    );
}