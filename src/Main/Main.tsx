import React from 'react';
import './Main.css';
import Typical from 'react-typical'

const Main = () => {

  const steps = [
    'for fun', 5000,
    'for knowledge', 4000,
    'to relax', 4000,
    'for fun', 3500,
    'to dream', 3500,
    'for adventures', 3500,
  ];

  return (
    <div className="main">
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

export default Main;
