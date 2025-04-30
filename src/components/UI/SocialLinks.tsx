import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Links = () => {
  return (
<div className="
  sticky top-0 left-1/2 transform -translate-x-1/2
  flex flex-row justify-center items-center
  bg-dark-bg rounded-b-md
  h-max w-max min-h-20 z-5
  md:top-1/2 md:left-0 md:-translate-y-1/2 md:translate-x-0
  md:flex-col md:rounded-r-md
">
      <a
        href="https://github.com/Tjstumpy"
        target={'_blank'}
        rel="noreferrer"
        className="display-inline-block pointer-events-none"
      >
        <FontAwesomeIcon icon={faGithub} className="text-large m-4 text-text-secondary pointer-events-auto hover:text-text-primary transition-all duration-300 " />
      </a>
      <a
        href="https://www.linkedin.com/in/timstumper/"
        target={'_blank'}
        rel="noreferrer"
        className="display-inline-block pointer-events-none"  
      >
        <FontAwesomeIcon icon={faLinkedinIn} className="text-large m-4 text-text-secondary pointer-events-auto hover:text-text-primary transition-all duration-300" />
      </a>
    </div>
  );
};

export default Links;
