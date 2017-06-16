class Parallax {
  constructor(layers) {
    this.scroll = this.scroll.bind(this);


    this.layers = layers;
    this.speed = new Array(layers.length);
    for(let i=0;i<this.layers.length;i++)
      this.speed[i] = parseInt(this.layers[i].getAttribute("data-speed"));
  }

  scroll(e) {
    this.update(window.pageYOffset);
  }

  update(scrollY) {
    for(let i=0;i<this.layers.length;i++) {
      const speed = this.speed[i];
      const layer = this.layers[i];
      layer.setAttribute("style", `transform: translateY(${(scrollY * speed / 100)}px)`);
    }
  }
}

export default Parallax;