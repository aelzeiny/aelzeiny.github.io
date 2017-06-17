import React from 'react';
import Parallax from './parallax';
import Projects from './projects';

export default function App(props) {
    return (
        <div>
            <Parallax/>
            <main>
                <img id="profile" src="assets/portfolio.png"></img>
                
                <h2>Projects</h2>
                <Projects />
            </main>
        </div>
    );
};