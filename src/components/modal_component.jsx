import React from 'react';
require('../styles/modal_component.scss');


const TIMEOUT = 550;
class ModalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
    this.maximizeModal = this.maximizeModal.bind(this);
    this.minimizeModal = this.minimizeModal.bind(this);
    this.monitorEscape = this.monitorEscape.bind(this);
    this._init();
  }

  componentDidMount() {
    window.setTimeout(() => {
      this.onMount();
      this.maximizeModal();
    }, 1);
  }

  closeModal() {
    this.minimizeModal();
    window.setTimeout(() => {
      this.props.history.goBack();
    }, TIMEOUT);
  }

  minimizeModal() {
    document.removeEventListener("keydown", this.monitorEscape, false);
    this.section.setAttribute("class", "modal");
    document.body.removeAttribute("style");
  }

  monitorEscape(event) {
    if(event.keyCode === 27) {
      this.closeModal();
    }
  }

  maximizeModal() {
    document.addEventListener("keydown", this.monitorEscape, false);
    this.section.setAttribute("class", "modal active");
    document.body.setAttribute("style", "overflow: hidden");
  }

  render() {
    return (
      <section ref={(el) => this.section = el} className="modal">
        <button onClick={this.closeModal}>
          <i className="fa fa-times"></i>
        </button>
        {this.renderModal()}
      </section>
    );
  }

  onMount() {
  }

  renderModal() {
  }

  _init() {
  }
}

export default ModalComponent;