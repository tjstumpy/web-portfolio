import './Contact.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  // const [isSubmitted, setIsSubmitted] = useState(false);

  // function sendEmail(e) {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm('service_f7fwqwr', 'template_6q0swx8', e.target, 'user_nfvjbK1mQsOjEYkxYBSBa')
  //     .then(
  //       result => {
  //         console.log(result.text);
  //         setIsSubmitted(true);
  //       },
  //       error => {
  //         console.log(error.text);
  //       }
  //     );
  //   e.target.reset();
  // }

  // const formJSX = (
  // <div className="contact-wrapper" data-aos="fade-up">
  //   <div className="contact-header">
  //     <a href="#contact" id="contact">
  //       <p id="contact-title">Contact Me</p>
  //     </a>
  //     <p id="contact-desc">Any questions? Feel free to reach out!</p>
  //   </div>

  //   <form onSubmit={sendEmail} className="contact-form">
  //     <div className="contact-flex">
  //       <div className="contact-input">
  //         <p>Name:</p>
  //         <input type="text" name="sender_name" required />
  //       </div>
  //       <div className="contact-input" id="email">
  //         <p>Email:</p>
  //         <input type="text" name="sender_email" required />
  //       </div>
  //     </div>
  //     <div className="contact-input" id="message">
  //       <p>Message:</p>
  //       <textarea name="message" required />
  //     </div>
  //     <input type="submit" className="form-submit"></input>
  //   </form>
  // </div>
  // );

  // const submittedJSX = (
  //   <div className="contact-wrapper" data-aos="fade-up">
  //     <div className="contact-header">
  //       <p id="contact-title">Thanks for reaching out!</p>
  //       <p id="contact-desc">I'll be sure to get back to you soon.</p>
  //     </div>
  //   </div>
  // );

  // return isSubmitted ? submittedJSX : formJSX;

  return (
    <div className="contact-wrapper">
      <div className="contact-header" data-aos="fade-up">
        <a href="#contact" id="contact">
          <p id="contact-title">Contact Me</p>
        </a>
        <p id="contact-desc">Any questions? Feel free to reach out!</p>
      </div>
      <div className="contact-options" data-aos="fade-up">
        <a
          href="https://www.linkedin.com/in/timstumper/"
          target={'_blank'}
          rel="noreferrer"
          style={{ color: 'inherit' }}
        >
          <FontAwesomeIcon icon={faLinkedinIn} className="contact-option" />
        </a>
        <span>|</span>
        <a href="mailto:me@timstumper.com" style={{ color: 'inherit', textDecoration: 'none' }}>
          <span className="contact-option">me@timstumper.com</span>
        </a>
        <span>|</span>
        <a href="tel:+18603878522" style={{ color: 'inherit', textDecoration: 'none' }}>
          <span className="contact-option">(860) 387-8522</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
