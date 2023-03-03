import React from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import Section from './Section/Section';
import SubHeader from './SubHeader/SubHeader';

function App() {
  return (
    <div className="app">
      <Header />
      <SubHeader />
      <Main />
      <Section />
    </div>
  );
}

export default App;
