import React, { useState } from 'react';
import './Header.css';
import Logo from './Logo';
import Login from './Login';
import Search from './Search';
import Menu from './Menu';

function Header() {
  const [headerColor, setHeaderColor] = useState(false)
  
  const changeHeaderColor = () => {
    window.scrollY >= 90 ? setHeaderColor(true) : setHeaderColor(false)
  }

  window.addEventListener("scroll", changeHeaderColor)

  return (
    <div className={headerColor ? "header header-scroll" : "header"}>
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
