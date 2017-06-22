import React from 'react';
require('../styles/modal.scss');
class ProjectModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="modal">
        <h1>{this.props.match.params.projectName}</h1>
      </section>
    );
  }
}

export default ProjectModal;