import { TypeAnimation } from "react-type-animation";

function Typewriter({ words }) {
  const sequence = [];

  words.forEach((word) => {
    sequence.push(word);
    sequence.push(2000);
  });

  return (
    <TypeAnimation
      sequence={sequence}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      cursor={true}
    />
  );
}

export default Typewriter;