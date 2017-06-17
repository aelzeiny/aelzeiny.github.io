import React from 'react';

class Skills extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="skills">
                <div className="frontend">
                    <img className="skill" src="assets/coding_icons/react.jpg"></img>
                    <img className="skill" src="assets/coding_icons/redux.png"></img>
                    <img className="skill" src="assets/coding_icons/html-5.png"></img>
                    <img className="skill" src="assets/coding_icons/sass.png"></img>
                    <img className="skill" src="assets/coding_icons/d3.png"></img>
                    <img className="skill" src="assets/coding_icons/jquery.png"></img>
                    <img className="skill" src="assets/coding_icons/bootstrap-4.svg"></img>
                </div>
                <div className="backend">
                    <img className="skill" src="assets/coding_icons/rails.png"></img>
                    <img className="skill" src="assets/coding_icons/asp-net.png"></img>
                    <img className="skill" src="assets/coding_icons/git.png"></img>
                    <img className="skill" src="assets/coding_icons/nodejs.svg"></img>
                    <img className="skill" src="assets/coding_icons/webpack.svg"></img>
                </div>
                <div className="language">
                    <img className="skill" src="assets/coding_icons/csharp.svg"></img>
                    <img className="skill" src="assets/coding_icons/java.png"></img>
                    <img className="skill" src="assets/coding_icons/ruby.png"></img>
                    <img className="skill" src="assets/coding_icons/javascript.png"></img>
                </div>
            </section>  
        );
    }
}

export default Skills;