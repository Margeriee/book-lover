import React from 'react';
import './Menu.css';

function Menu() {
  return (
    <div className="menu">
      <div className="menu-container">
        <span>All</span>
        <span>Bestsellers</span>
        <span>Recommended</span>
        <span>Newest</span>
      </div>
    </div>
  );
}

export default Menu;
