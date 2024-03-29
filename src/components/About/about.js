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
			<div className='about-header' data-aos="fade-up">
				<FontAwesomeIcon icon={faUser} className='btn about-icon' color='#9c9c9c' />
				<h3 className='about-title'>
					<a href='#about' id='about'>About Me</a>
				</h3>
			</div>
			<div className='info-wrapper' data-aos="fade-up">
				<div className='about-info' data-aos="fade-up">
					<span>Hello! My name is Tim, and I am 22 years old. I work as a <span style={{ color: 'white' }}>full-stack software engineer</span> at Chubb, where My primary focus is to maintain and develop <span style={{ color: 'white' }}>.NET web APIs</span>. This is my first job out of college after graduating with a <span style={{ color: 'white' }}>Bachelor of Science</span> in Computer Science from the University of Delaware back in May 2023.
						<br /><br />
						Throughout college, I foucsed my studies on <span style={{ color: 'white' }}>web development</span> and <span style={{ color: 'white' }}>UI/UX design</span>, improving my skills in a multitude of JavaScript libraries such as <span style={{ color: 'white' }}>Angular</span> and <span style={{ color: 'white' }}>React</span>. My favorite programs to develop would have to be using web APIs, as they let me create fun new purposes with some of my favorite apps, like Spotify. Although I've spent most of my time developing front-end code, I have fair experience with <span style={{ color: 'white' }}>Node.js</span>, <span style={{ color: 'white' }}>MongoDB</span>, and <span style={{ color: 'white' }}>PostgreSQL</span> through my internship over the summer of 2022.
					</span>
				</div>
				<img src={Selfie} alt='Tim Stumper'></img>
			</div>
		</div>
	)
}

export default About;