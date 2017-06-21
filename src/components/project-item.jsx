import React from 'react';

class ProjectItem extends React.Component{
  constructor(props) { 
    super(props);
  }

  render() {
    return (
      <article data-aos={this.props.aos}>
        <img src="https://unsplash.it/500/500/?random"></img>
        <div className="ovrly"></div>
        <div className="buttons">
            <a href="#" className="fa fa-link"></a>
            <a href="#" className="fa fa-search"></a>
        </div>
      </article>
    );
  }
}

export default ProjectItem;