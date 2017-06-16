class Parallax {
  constructor(layers) {
    this.scroll = this.scroll.bind(this);
    this.scrollY = this.lastScrollY = 0;
    this.layers = layers;
  }

  scroll(e) {
    this.lastScrollY = this.scrollY;
    this.scrollY = document.body.scrollTop;
    this.update(this.scrollY - this.lastScrollY);
  }

  update(delta) {
    for(let i=0;i<this.layers;i++) {
      const speed = this.speed[i];
      const layer = this.layers[i];
      layer.setAttribute("style", `transform: translateY(${speed*delta})`);
    }
  }
}

export default Parallax;