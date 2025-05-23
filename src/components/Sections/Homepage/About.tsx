import { useEffect } from 'react';
import { User } from 'lucide-react';
import Selfie from '../../../assets/images/homepage/me.png';
import SectionHeader from '../../UI/SectionHeader.tsx';
import 'aos/dist/aos.css';
import Aos from 'aos';

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full cursor-default" data-aos="fade-up">
      <SectionHeader icon={<User className="text-text-secondary w-8 h-8 mt-2 mr-2 mb-2 ml-0" />} title="About Me" navigation="about"/>
      <div className="flex flex-col-reverse flex-initial justify-center items-center w-[80%] text-justify mt-12 md:flex-row">
        <div className="text-xsmall font-light max-w-[80%] mt-8 mb-8 text-text-secondary md:max-w-[50%] md:mr-20 md:mt-0 md:mb-0 lg:text-small" data-aos="fade-up">
          <span>
            Hello! I’m Tim Stumper and I currently work as a{' '}
            <span className="font-medium text-text-primary">full-stack software engineer</span> at Chubb, where I
            maintain and develop <span className="font-medium text-text-primary">.NET APIs</span>
            <br />
            <br />
            Throughout college I studied front-end web development, core{' '}
            <span className="font-medium text-text-primary">UI/UX fundamentals</span>,{' '}
            <span className="font-medium text-text-primary">HCI</span>, and more. I still work on improving these
            skills every day in my personal life, through passion projects and educational material.
            <br />
            <br />
            My two favorite hobbies at the moment are learning{' '}
            <span className="font-medium text-text-primary">Japanese</span> and{' '}
            <span className="font-medium text-text-primary">rock climbing</span>.
          </span>
        </div>
        <img src={Selfie} alt="Photo of me" className="w-60 md:w-90 h-auto" data-aos="fade-up"></img>
      </div>
      <div className="flex flex-row gap-2 items-center justify-center w-full text-xsmall font-light md:mt-12 md:gap-8 lg:text-small" data-aos="fade-up">
        <span className="tracking-normal whitespace-nowrap">Full-Stack</span>
        <span>|</span>
        <span className="tracking-normal whitespace-nowrap hidden sm:inline">User Experience Engineering</span>
        <span className="tracking-normal whitespace-nowrap inline sm:hidden">UX Engineering</span>
        <span>|</span>
        <span className="tracking-normal whitespace-nowrap hidden sm:inline">User Interface Design</span>
        <span className="tracking-normal whitespace-nowrap inline sm:hidden">UI Design</span>
      </div>
    </div>
  );
};

export default About;
