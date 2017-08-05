import React from 'react';
class Parallax extends React.Component {
    constructor(props) {
        super(props);
        this.scroll = this.scroll.bind(this);
    }

    componentDidMount() {
        this.layers = document.querySelectorAll(".parallax");
        this.velo = new Array(this.layers.length);
        for(let i = 0;i < this.layers.length; i++) {
            let veloStr = this.layers[i].getAttribute("data-parallax-ratio");
            this.velo[i] = parseInt(veloStr);
        }
        window.addEventListener("scroll", this.scroll);
        let interval;
        window.addEventListener("ontouchstart", interval = window.setInterval(this.scroll, 20));
        window.addEventListener("ontouchend", window.clearInterval(interval));
    }
    
    scroll(e) {
        this.update(window.pageYOffset);
    }

    update(scrollY) {
        for(let i=0;i<this.layers.length;i++) {
            const velo = this.velo[i];
            const layer = this.layers[i];
            layer.setAttribute("style", `transform: translateY(${-(scrollY * velo / 100)}px)`);
        }
    }
    
    render() {
        return (
            <figcaption>
                <div className="layer parallax lg" id="layer-8" data-parallax-ratio="3"></div>
                <div className="layer parallax lg" data-parallax-ratio="3">
                    <h1>Alfred Elzeiny</h1>
                    <h2>Software Engineer</h2>
                    <p className="cursive">In the bay area</p>
                </div>
                <div className="layer parallax lg" id="layer-7" data-parallax-ratio="29"></div>
                <div className="layer parallax lg" id="layer-6" data-parallax-ratio="30"></div>
                <div className="layer parallax lg" id="layer-5" data-parallax-ratio="40"></div>
                <div className="layer parallax lg" id="layer-4" data-parallax-ratio="45"></div>
                <div className="layer parallax lg" id="layer-3" data-parallax-ratio="50"></div>
                <div className="layer parallax lg" id="layer-2" data-parallax-ratio="55"></div> 
                <div className="layer parallax lg" id="layer-1" data-parallax-ratio="70"></div>
                <div className="layer lg" id="layer-0"></div>
                <div className="layer sm" id="layer-A"></div>
                <div className="layer sm">
                    <h1>Alfred Elzeiny</h1>
                    <h2>Software Engineer</h2>
                    <p className="cursive">In the bay area</p>
                </div>
                {/*<div className="layer" id="base"></div>*/}
            </figcaption>
        );
    }
}

export default Parallax;