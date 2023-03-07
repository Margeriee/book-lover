import React from 'react';
import './SubHeader.css';

function SubHeader() {
  return (
    <div className="subHeader">
      <div className="subHeader-container">
        <span>All</span>
        <span>Bestsellers</span>
        <span>Recommended</span>
        <span>Newest</span>
      </div>
    </div>
  );
}

export default SubHeader;
