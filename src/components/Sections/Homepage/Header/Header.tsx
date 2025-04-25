import React, { useInsertionEffect, useState } from 'react';
import AnimatedLetters from '../../../Util/AnimatedLetters/AnimatedLetters.tsx';
import './Header.scss';
import 'animate.css';

const Header = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  // const introArray = ['H', 'e', 'y', ',', ' ', 'm', 'y', ' ', 'n', 'a', 'm', 'e', ' ', 'i', 's']
  const introArray = ['H', 'e', 'y', ',', ' ', 'I', "'", 'm'];
  const nameArray = ['T', 'i', 'm', ' ', 'S', 't', 'u', 'm', 'p', 'e', 'r'];

  useInsertionEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="header-wrapper">
      <div className="text-area">
        <AnimatedLetters letterClass={letterClass} strArray={introArray} idx={10} type={'intro'} />
        <br />
        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={18} type={'name'} />
        {/* <h1 className='animate__animated animate__fadeInUp'>Tim Stumper</h1> */}

        <h2 className="animate__animated animate__fadeInUp">
          Full-Stack Developer at Chubb with a passion for user experience
        </h2>
      </div>
    </div>
  );
};

export default Header;
