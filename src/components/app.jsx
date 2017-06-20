import React from 'react';
import Parallax from './parallax';
import About from './about';
import Projects from './projects';
import Contact from './contact';
import Skills from './skills';

require('../styles/application.scss');

export default function App(props) {
    return (
        <div>
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