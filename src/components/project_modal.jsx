import React from 'react';
import { Link } from 'react-router-dom';
require('../styles/modal.scss');

const TIMEOUT = 550;
class ProjectModal extends React.Component {
  constructor(props) {
    super(props);
    this._initData();
    this.state = {
      data: null
    };
    this.closeModal = this.closeModal.bind(this);
    this.maximizeModal = this.maximizeModal.bind(this);
    this.minimizeModal = this.minimizeModal.bind(this);
  }
  
  componentDidMount() {
    if (this.props.match.params.projectName) {
      window.setTimeout(() => {
      const data = this.projects.find((el) => this.props.match.params.projectName.toLowerCase().indexOf(el.search) >= 0);
      this.setState({data: data});
      this.video.play();
      this.video.playbackRate = 2.0;
      this.maximizeModal();
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
  }

  maximizeModal() {
    this.section.setAttribute("class", "modal active");
  }

  render() {
    return (
      <section ref={(el) => this.section = el} className="modal">
        {this.renderProject()}
        <button onClick={this.closeModal}>
          <i className="fa fa-times"></i>
        </button>
      </section>
    );
  }

  renderProject() {
    if(!this.state.data)
      return null;
    const data = this.state.data;
    return (
      <div className="modal-proj">
        <h1>{data.name}</h1>
        <a target="_blank" href={data.github}><i className="fa fa-github"></i></a>
        {this.renderLive()}
        <video ref={el => this.video = el} width="25%" height="50%" autoPlay muted>
          <source src={`assets/projects/${data.source}`} type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }

  renderLive() {
    if(this.state.data.live)
      return <a target="_blank" href={this.state.data.live}>LIVE</a>
    return null;
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
      },
      {
        name: 'Build-A-Mesh',
        search: 'build-a-mesh',
        source: 'build a mesh.mp4',
        description: (
          "Pathfinding algorithms are always visualized on square grids, but maps in the real-world can rarely ever be represented by" + 
          "neat, orthogonal corners. There are a few different ways to construct a navigation-mesh. This project demonstrates the " + 
          "pre-computational method that became popular in point-and-click adventure games in the late 90s, and continues to be popular in major development studios today"
        ),
        github: 'https://github.com/aelzeiny/Build-A-Mesh-Workshop',
        live: 'http://www.elzeiny.io/Build-A-Mesh-Workshop/',
        features: [
          "Cellular Automata Algorithm for procedural level generation",
          "Concave Polygon Rasterization Algorithm to convert square-grids to polygons",
          "Polygon addition and subtraction algorithms to edit levels",
          "Polygon mesh generation using uni-directional graphs, visualized in a nifty animation",
          "A*-Pathfinding algorithm to find shortest paths on the pre-computed graph"
        ],
        tech: [
          "javascript",
          "html5",
          "css3"
        ]
      },
      {
        name: 'Canoe Analyzer, Simulator, and Tester (CAST)',
        search: 'cast2000',
        source: 'Cast2000.mp4',
        description: (
          "Even as San Jose State's Structural Analysis lead for the Mid-Pacific Regional Concrete Canoe Competition, I wrote software to " +
          "solve Civil Engineering Problems. The goal of this competition is to build a fast, lightweight, and boyant canoe out of concrete" +
          "However, concrete is a very brittle material, and a canoe that sinks can never win a race. This program generates " +
          " a comprehensive structural calculation report; complete with maximum tensile, compressive, and shear stresses exerted on the hull during an intense race." 
        ),
        github: '',
        live: null,
        features: [
          "3D Point Cloud Triangulation to generate a mesh of the Hull.",
          "Text or AutoCAD DXF format imports, and excel sheet exports.",
          "Scalable Model-View-ViewModel Design",
          "Learned WPF for UI, and HelixToolkit for 3D rendering",
          "#JustCivilThings: Load Cases, Mohr's Circle, First & Second Moment Areas, Hydraulic Loads, Critical Cross-Sections, etc."
        ],
        tech: [
          "csharp"
        ]
      }
    ];
  }
}

export default ProjectModal;