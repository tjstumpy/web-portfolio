import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <div className="text-center" data-aos="fade-up">
        <a href="#contact" id="contact" className="cursor-default">
          <p className="text-large text-text-primary font-medium m-0 md:text-xlarge">Contact Me</p>
        </a>
        <p className="text-small cursor-default font-light md:text-large">Any questions? Feel free to reach out!</p>
      </div>
      <div className="flex flex-row items-center justify-center gap-2 w-full mt-12 font-light md:gap-8 md:mt-24" data-aos="fade-up">
        <a
          href="https://www.linkedin.com/in/timstumper/"
          target={'_blank'}
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedinIn} className="text-xsmall hover:text-text-primary transition-all duration-300 md:text-medium" />
        </a>
        <span className="text-xsmall opacity-75 md:text-medium">|</span>
        <a href="mailto:me@timstumper.com" className="decoration-none">
          <span className="text-xsmall hover:text-text-primary transition-all duration-300 md:text-medium">me@timstumper.com</span>
        </a>
        <span className="text-xsmall opacity-75 md:text-medium">|</span>
        <a href="tel:+18603878522" className="decoration-none">
          <span className="text-xsmall hover:text-text-primary transition-all duration-300 md:text-medium">(860) 387-8522</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
