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
      const data = this.projects.find((el) => newProps.match.params.projectName.toLowerCase().indexOf(el.search) >= 0);
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
        search: 'cloudcasts',
        source: 'Cloudcasts.mp4',
        description: (
          "CloudCasts is a podcast streaming app featuring original UI and mobile-responsive design. " +
          "This app pull from a variety of podcast directories (including ITunes) and RSS feeds to sort podcasts based on popularity. " +
          "Listen to any and every podcast on the web, all from a single source."
        ),
        github: 'https://github.com/aelzeiny/CloudCasts',
        live: 'http://www.cloudcast.life',
        features: [
          "Live-data fetching from a variety of sources and RSS feeds",
          "Podcast searching",
          "Lazy database caching on the backend",
          "Mobile-Responsive",
          "Dynamically changing color scheme through image parsing"
        ],
        tech: [
          "javascript",
          "ruby",
          "rails",
          "react",
          "redux",
          "heroku",
          "html5",
          "css3",
          "sass",
          "webpack"
        ]
      },
      {
        name: 'Subdivisionary',
        search: 'subdivisionary',
        source: 'Subdivisionary.mp4',
        description: (
          "CloudCasts is a podcast streaming app featuring original UI and mobile-responsive design. " +
          "This app pull from a variety of podcast directories (including ITunes) and RSS feeds to sort podcasts based on popularity. " +
          "Listen to any and every podcast on the web, all from a single source."
        ),
        github: 'https://github.com/aelzeiny/Subdivisionary',
        live: 'ccsfsubdivision.azurewebsites.net',
        features: [
          "Digitized 8 applications and consolidated over 64 forms for 3 city departments",
          "Ability to create, submit, and track applications",
          "Implemented payments through the City and County of SF's payment gateways",
          "Hand-rolled electronic signatures in legal accordance with UETA and ESIGN acts",
          "File uploads are handled asynchronously. Made for both Google Drive and Azure Blob file-hosting services."
        ],
        tech: [
          "javascript",
          "csharp",
          "asp-net",
          "bootstrap",
          "azure"
        ]
      }
    ];
  }
}

export default ProjectModal;