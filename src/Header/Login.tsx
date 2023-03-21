import React from 'react';
import './Login.css'
import {ReactComponent as ProfileSVG} from '../svg/profile.svg';

function Menu() {
  return (
    <div className="login">
        <ProfileSVG />
        <span>Log in</span>
    </div>
  );
}

export default Menu;
