import './AnimatedLetters.scss';

const AnimatedLetters = ({ letterClass, strArray, idx, type }: { letterClass: string, strArray: string[], idx: number, type: string }) => {
  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx} ${type} leading-none`}>
          {char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedLetters;
