import React from 'react';
import './Search.css';
import {ReactComponent as MagnifyingGlassSVG} from '../svg/magnifyingGlass.svg';

function Search() {
  return (
    <div className="search">
      <MagnifyingGlassSVG />
      <p>Search</p>
    </div>
  );
}

export default Search;
