import React from 'react';
import './Header.css';
import Logo from './Logo';
import Login from './Login';
import Search from './Search';
import Menu from './Menu';

function Header() {
  return (
    <div className="header">
      <div className="header-container">
        <Search />
        <Logo />
        <Login />
      </div>
      <Menu />
    </div>
  );
}

export default Header;
