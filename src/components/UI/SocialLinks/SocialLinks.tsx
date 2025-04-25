import React from 'react';
import './SocialLinks.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Links = () => {
  return (
    <div className="social-links">
      <a
        href="https://github.com/Tjstumpy"
        target={'_blank'}
        rel="noreferrer"
        style={{ display: 'inline-block', pointerEvents: 'none' }}
      >
        <FontAwesomeIcon icon={faGithub} className="btn social-icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/timstumper/"
        target={'_blank'}
        rel="noreferrer"
        style={{ display: 'inline-block', pointerEvents: 'none' }}
      >
        <FontAwesomeIcon icon={faLinkedinIn} className="btn social-icon" />
      </a>
    </div>
  );
};

export default Links;
