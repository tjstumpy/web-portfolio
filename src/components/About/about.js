import './about.scss'
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons'
import Selfie from '../../assets/images/me.png'
import 'aos/dist/aos.css'
import Aos from 'aos';

const About = () => {
	useEffect(() => {
		Aos.init({ duration: 1500 });
	}, []);

	return (
		<div className='about-wrapper'>
			<a href='#about' id='about'></a>
			<div className='about-header' data-aos="fade-up">
				<FontAwesomeIcon icon={faUser} className='btn about-icon' color='#9c9c9c' />
				<h3 className='about-title'>
					<a id='about'>About Me</a>
				</h3>
			</div>
			<div className='info-wrapper' data-aos="fade-up">
				<div className='about-info' data-aos="fade-up">
					<span>Hello! My name is Tim and I work as a <span style={{ color: 'white' }}>full-stack software engineer</span> at Chubb, where my primary focus is to maintain and develop <span style={{ color: 'white' }}>.NET web APIs</span>. I graduated with a <span style={{ color: 'white' }}>Bachelor of Science</span> in Computer Science from the University of Delaware back in May 2023.
						<br /><br />
						Throughout college, I focused my studies on <span style={{ color: 'white' }}>web development</span> via <span style={{ color: 'white' }}>Angular</span> and <span style={{ color: 'white' }}>React</span>, <span style={{ color: 'white' }}>UI design</span> via <span style={{ color: 'white' }}>Figma</span>, and <span style={{ color: 'white' }}>UX design</span> via courses like <span style={{ color: 'white' }}>Human Computer Interaction</span>.
						<br /><br />
						My two favorite hobbies at the moment are <span style={{ color: 'white' }}>learning Japanese</span> and <span style={{ color: 'white' }}>rock climbing</span>.
					</span>
				</div>
				<img src={Selfie} alt='Tim Stumper'></img>
			</div>
		</div>
	)
}

export default About;