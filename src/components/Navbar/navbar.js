import './navbar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFolder, faUser } from '@fortawesome/free-regular-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons';


const Navbar = ({ page = 'home' }) => (
  <nav className='nav-bar'>
    {page === 'home' && (
      <>
        <div className='about-wrap'>
          <FontAwesomeIcon icon={faUser} className='btn about-icon' color='var(--text-secondary)' />
          <a className='about-text' href="#about">About</a>
        </div>
        <div className='projects-wrap'>
          <FontAwesomeIcon icon={faFolder} className='btn projects-icon' color='var(--text-secondary)' />
          <a className='projects-text' href="#projects">Projects</a>
        </div>
        <div className='contact-wrap'>
          <FontAwesomeIcon icon={faEnvelope} className='btn contact-icon' color='var(--text-secondary)' />
          <a className='contact-text' href="#contact">Contact</a>
        </div>
      </>
    )}
    {page === 'project' && (
      <div className='about-wrap'>
        <FontAwesomeIcon icon={faHouse} className='btn about-icon' color='var(--text-secondary)' />
        <a className='about-text' href="/">Home</a>
      </div>
    )}
    <button className='resume-btn'>
      <a href={require('../../assets/resume-2023.pdf')} target="_blank" rel="noreferrer">Resume</a>
    </button>
  </nav>
)

export default Navbar;