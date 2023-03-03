import React from 'react';
import './Search.css'

function Search() {
  return (
    <div className="search">
      <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M39.4531 34.6094L31.6406 26.7969C31.25 26.4844 30.7812 26.25 30.3125 26.25H29.0625C31.1719 23.5156 32.5 20.0781 32.5 16.25C32.5 7.34375 25.1562 0 16.25 0C7.26562 0 0 7.34375 0 16.25C0 25.2344 7.26562 32.5 16.25 32.5C20 32.5 23.4375 31.25 26.25 29.0625V30.3906C26.25 30.8594 26.4062 31.3281 26.7969 31.7188L34.5312 39.4531C35.3125 40.2344 36.4844 40.2344 37.1875 39.4531L39.375 37.2656C40.1562 36.5625 40.1562 35.3906 39.4531 34.6094ZM16.25 26.25C10.7031 26.25 6.25 21.7969 6.25 16.25C6.25 10.7812 10.7031 6.25 16.25 6.25C21.7188 6.25 26.25 10.7812 26.25 16.25C26.25 21.7969 21.7188 26.25 16.25 26.25Z" fill="white"/>
      </svg>
      <p>Search</p>
    </div>
  );
}

export default Search;