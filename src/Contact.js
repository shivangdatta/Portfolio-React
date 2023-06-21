import React from 'react';
import './Contact.css';
import {AiFillLinkedin} from 'react-icons/ai'


function sendEmail(formData) {
  // Here, you can implement the code to send an email using a suitable method or library
  // You'll need to provide your own implementation to send the email
  // For example, you can use the Nodemailer library in Node.js to send emails
  
  // Access form data
  const { name, email, message } = formData;

  // Log the form data
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);
  console.log('not sending your messages due to security issues , these will be fixed moving forward :(')
  // Replace the log statements with the actual email sending logic
  // ...
}


export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      message: e.target.elements.message.value,
    };
    sendEmail(formData);
  }


  return (
    <div className='container' id='contact-id'>
      <section id="contact">
  
  <h1 className="section-header">Get in Touch</h1>
  
  <div className="contact-wrapper">
  
  {/* <!-- Left contact page --> / */}
    
    <form id="contact-form" className="form-horizontal" role="form" onSubmit={handleSubmit}>
       
      <div className="form-group">
        <div className="col-sm-12">
          <input type="text" className="form-control" id="name" placeholder="NAME" name="name" defaultValue=""/>
        </div>
      </div>

      <div className="form-group">
        <div className="col-sm-12">
          <input type="email" className="form-control" id="email" placeholder="EMAIL" name="email" defaultValue=""  />
        </div>
      </div>

      <textarea className="form-control" rows="10" placeholder="MESSAGE
      
      kindly click on my mail to send actual mail as this feature may not be working properly" name="message" required  ></textarea>
      
      <button className="btn btn-primary send-button" id="submit" type="submit" value="SEND">
        <div className="alt-send-button">
          <i className="fa fa-paper-plane"></i><span className="send-text">SEND</span>
        </div>
      
      </button>
      
    </form>
    

    
      <div className="direct-contact-container">

        <ul className="contact-list">
          <li className="list-item"><i className="fa fa-map-marker fa-2x"><span className="contact-text place">New Delhi , Delhi</span></i></li>
          
          <li className="list-item"><i className="fa fa-phone fa-2x"><span className="contact-text phone"><a href="tel:+91-96544-47742" title="Give me a call">(+91) 96544-47742</a></span></i></li>
          
          <li className="list-item"><i className="fa fa-envelope fa-2x"><span className="contact-text gmail"><a href="mailto:shivangdatta@gmail.com" title="Send me an email">shivangdatta@gmail.com</a></span></i></li>
          
        </ul>

        <hr/>
        <ul className="social-media-list">
          <li><a href="#" target="_blank" className="contact-icon">
            <i className="fa fa-github" aria-hidden="false"></i></a>
          </li>
          <li><a href="#" target="_blank" className="contact-icon">
            <i className="fa fa-linkedin" aria-hidden="true"></i></a>
          </li>      
        </ul>
        <hr/>

        <div className="copyright">&copy;NO RIGHTS RESERVED :)</div>

      </div>
    
  </div>
  
</section>  
  
  
    </div>
  )
}
