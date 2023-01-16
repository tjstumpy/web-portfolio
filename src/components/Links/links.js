import './links.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Links = () => {

	return(
		<div className='social-links'>
			<a href='https://github.com/Tjstumpy' target={'_blank'}>			
				<FontAwesomeIcon icon={faGithub} className='btn about-icon' color='#9c9c9c'/>
			</a>
			<a href='https://www.linkedin.com/in/timstumper/' target={'_blank'}>			
			<FontAwesomeIcon icon={faLinkedinIn} className='btn about-icon' color='#9c9c9c' />
			</a>
			<a href='https://www.instagram.com/tjstumpy/' target={'_blank'}>			
			<FontAwesomeIcon icon={faInstagram} className='btn about-icon' color='#9c9c9c' />
			</a>
		</div>
	)
}

export default Links;