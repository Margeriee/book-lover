import React from 'react';
import './Header.css';
import Logo from './Logo';
import Login from './Login';
import Search from './Search';

function Header() {
  return (
    <div className="header">
      <div className="header-container">
        <Search />
        <Logo />
        <Login />
      </div>
    </div>
  );
}

export default Header;
