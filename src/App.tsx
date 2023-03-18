import React from 'react';
import './App.css'
import Header from './Header/Header';
import Main from './Main/Main';
import { Routes, Route } from 'react-router-dom'
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>/
        <Route path="/" element={<Main />}/>
        {/* <Route path="/favorites" element={<Section />}/> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
