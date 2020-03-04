import React from 'react';
import Parallax from './parallax';
import About from './about';
import Projects from './projects';
import Contact from './contact';
import Skills from './skills';
import ResumeModal from './resume_modal';
import ProjectModal from './project_modal';

import { Route, Switch } from 'react-router-dom';

require('../styles/application.scss');

export default function App(props) {
    return (
        <div>
            <Parallax/>
            <main>
                <About />
                <Projects />
                {/*<Skills />*/}
                <Contact />
                <Switch>
                    <Route path="/projects/Resume" component={ResumeModal} />
                    <Route path="/projects/:projectName" component={ProjectModal} />
                </Switch>
            </main>
        </div>
    );
};
