class Parallax {
  constructor(layers) {
    this.scroll = this.scroll.bind(this);


    this.layers = layers;
    this.speed = new Array(layers.length);
    for(let i=0;i<this.layers.length;i++)
      this.speed[i] = parseFloat(this.layers[i].getAttribute("data-speed"));
  }

  scroll(e) {
    this.update(document.body.scrollTop);
  }

  update(scrollY) {
    for(let i=0;i<this.layers.length;i++) {
      const speed = this.speed[i];
      const layer = this.layers[i];
      layer.setAttribute("style", `transform: translateY(${speed*scrollY}px)`);
    }
  }
}

export default Parallax;