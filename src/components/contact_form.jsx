import React from 'react';
class ContactForm extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (<form action="https://formspree.io/ahmed.elzeiny@gmail.com" method="POST">
        <div className="group">
          <input type="text" name="name"  id="name" required></input>
          <span className="highlight"></span>
          <span className="bar"></span>
          <label htmlFor="name">Name</label>
        </div>
        <div className="group">
          <input type="email" name="_replyto"  id="email" required></input>
          <span className="highlight"></span>
          <span className="bar"></span>
          <label htmlFor="email">Email</label>
        </div>
        <button type="submit">Send</button>
    </form>);
  }
}

export default ContactForm;