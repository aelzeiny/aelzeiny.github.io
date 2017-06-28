import React from 'react';
import ModalComponent from './modal_component';

require('../styles/resume_modal.scss');

class ResumeModal extends ModalComponent {
  constructor(props) {
    super(props);
  }

  renderModal() {
    return (
      <h1>RESUME</h1>
    );
  }
}

export default ResumeModal;