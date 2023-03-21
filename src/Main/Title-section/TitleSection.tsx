import React from 'react';
import './TitleSection.css';
import Typical from 'react-typical'

const TitleSection = () => {

  const steps = [
    'for fun', 5000,
    'for knowledge', 4000,
    'to relax', 4000,
    'for fun', 3500,
    'to dream', 3500,
    'for adventures', 3500,
  ];

  return (
    <div className="titleSection">
      <div className="container">
        <h1>
          We love to read <br/>
          We read&nbsp;
            <Typical
            steps={steps}
            loop={Infinity}
            wrapper="p"
            />
        </h1>
      </div>
    </div>
  );
}

export default TitleSection;
