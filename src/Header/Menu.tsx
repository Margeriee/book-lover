import React from 'react';
import './Menu.css'

function Menu() {
  return (
    <div className="menu">
        <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24.4531 23.75C22.1875 23.75 21.1719 25 17.5 25C13.75 25 12.7344 23.75 10.4688 23.75C4.6875 23.75 0 28.5156 0 34.2969V36.25C0 38.3594 1.64062 40 3.75 40H31.25C33.2812 40 35 38.3594 35 36.25V34.2969C35 28.5156 30.2344 23.75 24.4531 23.75ZM31.25 36.25H3.75V34.2969C3.75 30.5469 6.71875 27.5 10.4688 27.5C11.6406 27.5 13.4375 28.75 17.5 28.75C21.4844 28.75 23.2812 27.5 24.4531 27.5C28.2031 27.5 31.25 30.5469 31.25 34.2969V36.25ZM17.5 22.5C23.6719 22.5 28.75 17.5 28.75 11.25C28.75 5.07812 23.6719 0 17.5 0C11.25 0 6.25 5.07812 6.25 11.25C6.25 17.5 11.25 22.5 17.5 22.5ZM17.5 3.75C21.5625 3.75 25 7.1875 25 11.25C25 15.3906 21.5625 18.75 17.5 18.75C13.3594 18.75 10 15.3906 10 11.25C10 7.1875 13.3594 3.75 17.5 3.75Z" fill="white"/>
        </svg>
        <span>Log in</span>
    </div>
  );
}

export default Menu;
