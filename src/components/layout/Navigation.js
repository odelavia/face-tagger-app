import React from 'react';
import Logo from './Logo.js';
import ProfileIcon from '../user/ProfileIcon';

const Navigation = ({ onRouteChange, isSignedIn, toggleModal }) => {
  if(isSignedIn) {
    return (
      <nav>
          <Logo />
          <a onClick={() => onRouteChange('signout')} href='' className='navlinks signout-btn'>Sign Out</a>
          <ProfileIcon onRouteChange={onRouteChange} toggleModal={toggleModal} />
      </nav>
    );
  } else {
    return (
      <nav>
        <Logo />
        <div className='navlinks'>
          <p onClick={() => onRouteChange('signin')} className='signout-btn'>Sign In</p>
          <p onClick={() => onRouteChange('register')} className='register-btn'>Register</p>
        </div>
      </nav>
    );
  }
}

export default Navigation;