import React from 'react';
import { Link } from 'react-router-dom';
class ProjectItem extends React.Component{
  constructor(props) { 
    super(props);
  }

  render() {
    return (
      <article data-aos={this.props.aos}>
        <h4>{this.props.title}</h4>
        <div className="project-item">
          <Link to={`/projects/${this.props.title.replace(/ /g,'')}`}>
            <img src={`/assets/projects/${this.props.img}`}></img>
            <div className="ovrly"></div>
            <div className="buttons">
                <i href="#" className="fa fa-search"></i>
            </div>
          </Link>
        </div>
      </article>
    );
  }
}

export default ProjectItem;