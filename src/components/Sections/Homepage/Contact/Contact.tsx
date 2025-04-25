import './Contact.scss';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm('service_f7fwqwr', 'template_6q0swx8', e.target, 'user_nfvjbK1mQsOjEYkxYBSBa')
      .then(
        result => {
          console.log(result.text);
          setIsSubmitted(true);
        },
        error => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  const formJSX = (
    <div className="contact-wrapper" data-aos="fade-up">
      <div className="contact-header">
        <a href="#contact" id="contact">
          <p id="contact-title">Contact Me</p>
        </a>
        <p id="contact-desc">Any questions? Feel free to reach out!</p>
      </div>

      <form onSubmit={sendEmail} className="contact-form">
        <div className="contact-flex">
          <div className="contact-input">
            <p>Name:</p>
            <input type="text" name="sender_name" required />
          </div>
          <div className="contact-input" id="email">
            <p>Email:</p>
            <input type="text" name="sender_email" required />
          </div>
        </div>
        <div className="contact-input" id="message">
          <p>Message:</p>
          <textarea name="message" required />
        </div>
        <input type="submit" className="form-submit"></input>
      </form>
    </div>
  );

  const submittedJSX = (
    <div className="contact-wrapper" data-aos="fade-up">
      <div className="contact-header">
        <p id="contact-title">Thanks for reaching out!</p>
        <p id="contact-desc">I'll be sure to get back to you soon.</p>
      </div>
    </div>
  );

  return isSubmitted ? submittedJSX : formJSX;
};

export default Contact;
