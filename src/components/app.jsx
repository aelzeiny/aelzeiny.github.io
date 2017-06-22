import React from 'react';
import Parallax from './parallax';
import About from './about';
import Projects from './projects';
import Contact from './contact';
import Skills from './skills';
import ProjectModal from './project_modal';
import { Route } from 'react-router-dom';

require('../styles/application.scss');

export default function App(props) {
    return (
        <div>
            <Route path="/projects/:projectName" component={ProjectModal} />
            <Parallax/>
            <main>
                <About />
                <Projects />
                <Skills />
                <Contact />
            </main>
        </div>
    );
};