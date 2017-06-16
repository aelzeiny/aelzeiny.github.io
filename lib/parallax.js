class Parallax {
  constructor() {
    this.scroll = this.scroll.bind(this);
  }
  scroll(e) {
    console.log(e);
  }
}

export default Parallax;