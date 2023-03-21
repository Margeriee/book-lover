import React from 'react';
import ProcessSection from './Process-section/ProcessSection';
import RecommendationsSection from './Recommendations-section/RecommendationsSection';
import TitleSection from './Title-section/TitleSection';

const Main = () => {

  return (
    <div className="main">
      <TitleSection />
      <RecommendationsSection />
      <ProcessSection />
      <RecommendationsSection />
    </div>
  );
}

export default Main;
