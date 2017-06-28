import React from 'react';
import { Link } from 'react-router-dom';
require('../styles/modal.scss');

const TIMEOUT = 550;
class ProjectModal extends React.Component {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
    this.maximizeModal = this.maximizeModal.bind(this);
    this.minimizeModal = this.minimizeModal.bind(this);
    this._init();
  }
  
  componentDidMount() {
    if (this.props.match.params.projectName) {
      window.setTimeout(() => {
        this.onMount();
        this.maximizeModal();
      }, 1);
    }
  }

  closeModal() {
    this.minimizeModal();
    window.setTimeout(() => {
      window.location.href = '#/';
    }, TIMEOUT);
  }

  minimizeModal() {
    this.section.setAttribute("class", "modal");
    document.body.removeAttribute("style");
  }

  maximizeModal() {
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
    const data = this.projects.find((el) => this.props.match.params.projectName.toLowerCase().indexOf(el.search) >= 0);
    this.setState({data: data});
    this.video.play();
    this.video.playbackRate = 2.0;
  }

  renderModal() {
  }

  _init() {
  }
}

export default ProjectModal;