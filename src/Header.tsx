import React from 'react';
import './Header.css';
import Logo from './Logo';
import Menu from './Menu';
import Search from './Search';

function Header() {
  return (
    <div className="header">
        <Search />
        <Logo />
        <Menu />
    </div>
  );
}

export default Header;
