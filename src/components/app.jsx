import React from 'react';
import Parallax from './parallax';
import Projects from './projects';
import Skills from './skills';

export default function App(props) {
    return (
        <div>
            <Parallax/>
            <main>
                <img id="profile" src="assets/portfolio.png"></img>
                
                <h2>Projects</h2>
                <Projects />

                <h2>Skills</h2>
                <Skills />
            </main>
        </div>
    );
};