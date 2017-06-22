import React from 'react';
// import { browserHistory } from 'react-router';
import { Link } from 'react-router-dom';
// browserHistory.push('/some/path');
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
            <img src="https://unsplash.it/500/500/?random"></img>
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