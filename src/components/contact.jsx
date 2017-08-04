import React from 'react';
import ContactForm from './contact_form';

require('../styles/contact.scss');

class Contact extends React.Component{
  constructor(props) {
    super(props);
    this.iconHover = this.iconHover.bind(this);
    this.state = {
      active: 'alex@elzeiny.io'
    };
  }

  iconHover(el) {
    const element = el.currentTarget;
    this.setState({
      active: element.getAttribute("data-active")
    });
  }

  render() {
    return (
      <div>
        <h2>Say hi</h2>
        <h3>to {this.state.active}</h3>
        <section className="contact container" data-aos="zoom-in-up">
          <ContactForm />
          <div className="logos flexbox">
            <a className="logo" onMouseOver={this.iconHover} data-active="alex@elzeiny.io">
              <i className="fa fa-envelope"></i>
            </a>
            
            <a className="logo" onMouseOver={this.iconHover} href="https://github.com/aelzeiny" target="_blank" data-active="github.com/aelzeiny">
              <i className="fa fa-github-alt"></i>
            </a>
            
            <a className="logo" onMouseOver={this.iconHover} href="https://www.linkedin.com/in/aelzeiny/" target="_blank" data-active="/in/aelzeiny/">
              <i className="fa fa-linkedin"></i>
            </a>
            
            {/*<a className="logo" onMouseOver={this.iconHover} href="https://www.facebook.com/ahmed.a.elzeiny" target="_blank" data-active="facebook.com/ahmed.a.elzeiny">
              <i className="fa fa-facebook"></i>
            </a>*/}

            <a className="logo" onMouseOver={this.iconHover} data-active="408.458.0241">
              <i className="fa fa-phone"></i>
            </a>
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;