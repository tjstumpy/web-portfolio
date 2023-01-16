import './navbar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFolder, faUser } from '@fortawesome/free-regular-svg-icons'

const Navbar = () => (

			<nav className='nav-bar'>
				{/* <FontAwesomeIcon icon={faHome} className='btn home-icon' color='#9c9c9c' /> */}
				<div className='about-wrap'>
					<FontAwesomeIcon icon={faUser} className='btn about-icon' color='#9c9c9c' />
					<a className='about-text' href="#about">About</a>
				</div>
				<div className='projects-wrap'>
					<FontAwesomeIcon icon={faFolder} className='btn projects-icon' color='#9c9c9c' />
					<a className='projects-text' href="#projects">Projects</a>
				</div>
				<div className='contact-wrap'>
					<FontAwesomeIcon icon={faEnvelope} className='btn contact-icon' color='#9c9c9c' />
					<a className='contact-text' href="#contact">Contact</a>
				</div>
				<button className='resume-btn'>
					<a href={require('../../assets/resume-2023.pdf')} target="_blank" rel="noreferrer">Resume</a>
				</button>
			</nav>
)

export default Navbar;