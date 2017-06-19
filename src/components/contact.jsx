import React from 'react';
import ContactForm from './contact_form';
class Contact extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Say hi</h2>
        <section className="contact container">
          <div className="logo">
            <i className="fa fa-envelope"></i>
          </div>
          
          <div className="logo">
            <i className="fa fa-github-alt"></i>
          </div>
          
          <div className="logo">
            <i className="fa fa-linkedin"></i>
          </div>
          
          <div className="logo">
            <i className="fa fa-facebook"></i>
          </div>

          <ContactForm />
        </section>
      </div>
    );
  }
}

export default Contact;