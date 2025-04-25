import React from 'react';
import './AnimatedLetters.scss';

const AnimatedLetters = ({ letterClass, strArray, idx, type }) => {
  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx} ${type}`}>
          {char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedLetters;
