import React from 'react';

require('../styles/hero.scss');

class Parallax extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <figcaption>
                <div className="hero">
                    <div className="layer" data-parallax-ratio="3"  id="layer-0">
                        <img src="../../assets/Layer0.svg"></img>
                    </div>
                    {/*<div className="layer parallax" data-parallax-ratio="3">
                        <h1>Ahmed Elzeiny</h1>
                        <h2>Software Engineer</h2>
                        <p className="cursive">In the bay area</p>
                    </div>*/}
                    <div className="layer" data-parallax-ratio="29" id="layer-1">
                        <img src="../../assets/Layer1.svg"></img>
                    </div>
                    <div className="layer" data-parallax-ratio="30" id="layer-2">
                        <img src="../../assets/Layer2.svg"></img>
                    </div>
                    <div className="layer" data-parallax-ratio="40" id="layer-3">
                        <img src="../../assets/Layer3.svg"></img>
                    </div>
                    <div className="layer" data-parallax-ratio="45" id="layer-4">
                        <img src="../../assets/Layer4.svg"></img>
                    </div>
                    <div className="layer" data-parallax-ratio="55" id="layer-4-5">
                        <img src="../../assets/Layer5.5.svg"></img>
                    </div> 
                    <div className="layer" data-parallax-ratio="70" id="layer-5">
                        <img src="../../assets/Layer5.svg"></img>
                    </div>
                    <div className="layer" id="layer-6">
                        <img src="../../assets/Layer6.svg"></img>
                    </div>
                    {/*<div className="layer">
                        <div id="base">
                            <img src="../../assets/SF.svg"></img>
                        </div>
                    </div>*/}
                </div>
            </figcaption>
        );
    }
}

export default Parallax;