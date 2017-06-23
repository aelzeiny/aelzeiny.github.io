import React from 'react';

require('../styles/hero.scss');

class Parallax extends React.Component {
    constructor(props) {
        super(props);
        this.scroll = this.scroll.bind(this);
    }
    
    render() {
        return (
            <figcaption>
                <div className="layer parallax" id="layer-0" data-parallax-ratio="3">
                    <img src="../../assets/Layer0.svg"></img>
                </div>
                <div className="layer parallax" data-parallax-ratio="3">
                    <h1>Ahmed Elzeiny</h1>
                    <h2>Software Engineer</h2>
                    <p className="cursive">In the bay area</p>
                </div>
                <div className="layer parallax" id="layer-1" data-parallax-ratio="29">
                    <img src="../../assets/Layer1.svg"></img>
                </div>
                <div className="layer parallax" id="layer-2" data-parallax-ratio="30">
                    <img src="../../assets/Layer2.svg"></img>
                </div>
                <div className="layer parallax" id="layer-3" data-parallax-ratio="40">
                    <img src="../../assets/Layer3.svg"></img>
                </div>
                <div className="layer parallax" id="layer-4" data-parallax-ratio="45">
                    <img src="../../assets/Layer4.svg"></img>
                </div>
                <div className="layer parallax" id="layer-4-5" data-parallax-ratio="55">
                    <img src="../../assets/Layer5.5.svg"></img>
                </div> 
                <div className="layer parallax" id="layer-5" data-parallax-ratio="70">
                    <img src="../../assets/Layer5.svg"></img>
                </div>
                <div className="layer" id="layer-6">
                    <img src="../../assets/Layer6.svg"></img>
                </div>
            </figcaption>
        );
    }
}

export default Parallax;