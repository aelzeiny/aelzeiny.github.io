import React from 'react';

class Skills extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="skills">
                <div className="frontend">
                    <img className="skill" src="assets/react.jpg"></img>
                    <img className="skill" src="assets/redux.png"></img>
                    <img className="skill" src="assets/html-5.png"></img>
                    <img className="skill" src="assets/sass.png"></img>
                    <img className="skill" src="assets/d3.png"></img>
                    <img className="skill" src="assets/jquery.png"></img>
                    <img className="skill" src="assets/bootstrap-4.svg"></img>
                </div>
                <div className="backend">
                    <img className="skill" src="assets/rails.png"></img>
                    <img className="skill" src="assets/asp-net.png"></img>
                    <img className="skill" src="assets/git.png"></img>
                    <img className="skill" src="assets/nodejs.svg"></img>
                    <img className="skill" src="assets/webpack.svg"></img>
                </div>
                <div className="language">
                    <img className="skill" src="assets/ruby.png"></img>
                    <img className="skill" src="assets/ruby.png"></img>
                    <img className="skill" src="assets/csharp.svg"></img>
                    <img className="skill" src="assets/java.png"></img>
                </div>
            </section>  
        );
    }
}

export default Skills;