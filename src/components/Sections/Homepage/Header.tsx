import { useInsertionEffect, useState } from 'react';
import AnimatedLetters from '../../Util/AnimatedLetters.tsx';

const Header = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
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
    <div className="w-full h-[60vh] flex flex-col items-center justify-center p-0 text-center">
      <div className="text-area text-text-primary text-left">
        <AnimatedLetters letterClass={letterClass} strArray={introArray} idx={10} type={'text-small font-light md:text-medium'} />
        <br />
        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={18} type={'text-large font-medium md:text-xlarge'} />
        <h2 className="animate__animated animate__fadeInUp animate__delay-5s mt-4 text-text-secondary text-center text-xxsmall font-extralight md:text-small md:mt-6">
          Full-Stack Developer at Chubb with a passion for user experience
        </h2>
      </div>
    </div>
  );
};

export default Header;
