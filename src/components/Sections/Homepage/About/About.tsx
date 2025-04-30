import './About.scss';
import React, { useEffect } from 'react';
import { User } from 'lucide-react';
import Selfie from '../../../../assets/images/homepage/me.png';
import SectionHeader from '../../../UI/SectionHeader/SectionHeader.tsx';
import 'aos/dist/aos.css';
import Aos from 'aos';

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="about-wrapper" data-aos="fade-up">
      <SectionHeader icon={<User className="section-icon" />} title="About Me" navigation="about" />
      <div className="info-wrapper">
        <div className="about-info" data-aos="fade-up">
          <span>
            Hello! I’m Tim Stumper and I currently work as a{' '}
            <span className="about-emphasis">full-stack software engineer</span> at Chubb, where I
            maintain and develop <span className="about-emphasis">.NET APIs</span>
            <br />
            <br />
            Throughout college I studied front-end web development, core{' '}
            <span className="about-emphasis">UI/UX fundamentals</span>,{' '}
            <span className="about-emphasis">HCI</span>, and more. I still work on improving these
            skills every day in my personal life, through passion projects and educational material.
            <br />
            <br />
            My two favorite hobbies at the moment are learning{' '}
            <span className="about-emphasis">Japanese</span> and{' '}
            <span className="about-emphasis">rock climbing</span>.
          </span>
        </div>
        <img src={Selfie} alt="Photo of me" data-aos="fade-up"></img>
      </div>
      <div className="about-skills" data-aos="fade-up">
        <span>Full-Stack</span>
        <span>|</span>
        <span>User Experience Engineering</span>
        <span>|</span>
        <span>User Interface Design</span>
      </div>
    </div>
  );
};

export default About;
