import React from 'react';

class ProjectItem extends React.Component{
  constructor(props) { 
    super(props);
  }

  render() {
    return (
      <article data-aos={this.props.aos}>
        <h4>{this.props.title}</h4>
        <div className="project-item">
          <a href="#">
            <img src="https://unsplash.it/500/500/?random"></img>
            <div className="ovrly"></div>
            <div className="buttons">
                <i href="#" className="fa fa-search"></i>
            </div>
          </a>
        </div>
      </article>
    );
  }
}

export default ProjectItem;