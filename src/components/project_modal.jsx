import React from 'react';
import { Link } from 'react-router-dom';
require('../styles/modal.scss');

const TIMEOUT = 550;
class ProjectModal extends React.Component {
  constructor(props) {
    super(props);
    this._initData();
    this.closeModal = this.closeModal.bind(this);
    this.maximizeModal = this.maximizeModal.bind(this);
    this.minimizeModal = this.minimizeModal.bind(this);
  }
  
  componentDidMount() {
    console.log("MOUNTED: ", this.props.match.params.projectName);
    if (this.props.match.params.projectName) {
      window.setTimeout(() => {
        this.maximizeModal();
      }, 1);
    }
  }

  closeModal() {
    this.minimizeModal();
    window.setTimeout(() => {
      console.log("closed");
      window.location.href = '#/';
    }, TIMEOUT);
  }

  componentWillReceiveProps(newProps) {
    console.log("PROPS: ", this.props.match.params.projectName, newProps.match.params.projectName);
    if (newProps.match.params.projectName) {
      const data = this.projects.find((el) => newProps.match.params.projectName.indexOf(el.search) >= 0);
      this.maximizeModal();
    }
  }

  minimizeModal() {
    console.log("closing...");
    this.section.setAttribute("class", "modal");
  }

  maximizeModal() {
    console.log("opening");
    this.section.setAttribute("class", "modal active");
  }

  render() {
    return (
      <section ref={(el) => this.section = el} className="modal">
        <h1>{this.props.match.params.projectName}</h1>
        <button onClick={this.closeModal}>HELLO</button>
      </section>
    );
  }

  _initData() {
    
    this.projects = [
      {
        name: 'Cloud Casts',
        search: '',
        image: 'cloudcasts.gif',
        description: '',
        github: '',
        live: '',
        features: [
          
        ],
        tech: [

        ]
      }
    ];
  }
}

export default ProjectModal;