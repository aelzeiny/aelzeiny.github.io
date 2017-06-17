import React from 'react';
class Parallax extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <figcaption>
                <div className="layer parallax" id="layer-0" data-speed="3"></div>
                <div className="layer parallax" data-speed="3">
                    <h1>Ahmed Elzeiny</h1>
                    <h2>Software Engineer</h2>
                    <p className="cursive">In the bay area</p>
                </div>
                <div className="layer parallax" id="layer-1" data-speed="29"></div>
                <div className="layer parallax" id="layer-2" data-speed="30"></div>
                <div className="layer parallax" id="layer-3" data-speed="40"></div>
                <div className="layer parallax" id="layer-4" data-speed="45"></div>
                <div className="layer parallax" id="layer-4-5" data-speed="55"></div> 
                <div className="layer parallax" id="layer-5" data-speed="70"></div>
                <div className="layer" id="layer-6"></div>
                {/*<div className="layer" id="base"></div>*/}
            </figcaption>
        );
    }
}

export default Parallax;