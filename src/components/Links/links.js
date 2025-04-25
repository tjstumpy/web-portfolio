import './links.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Links = () => {
  return (
    <div className="social-links">
      <a
        href="https://github.com/Tjstumpy"
        target={'_blank'}
        rel="noreferrer"
        style={{ display: 'inline-block', pointerEvents: 'none' }}
      >
        <FontAwesomeIcon
          icon={faGithub}
          className="btn social-icon"
          color="var(--text-secondary)"
          style={{ pointerEvents: 'auto' }}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/timstumper/"
        target={'_blank'}
        rel="noreferrer"
        style={{ display: 'inline-block', pointerEvents: 'none' }}
      >
        <FontAwesomeIcon
          icon={faLinkedinIn}
          className="btn social-icon"
          color="var(--text-secondary)"
          style={{ pointerEvents: 'auto' }}
        />
      </a>
      {/* <a href='https://www.instagram.com/tjstumpy/' target={'_blank'} rel="noreferrer">			
			<FontAwesomeIcon icon={faInstagram} className='btn about-icon' color='var(--text-secondary)' />
			</a> */}
    </div>
  );
};

export default Links;
