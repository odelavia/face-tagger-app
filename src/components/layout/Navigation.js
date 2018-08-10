import React from 'react';
import Logo from './Logo.js';
import ProfileIcon from '../user/ProfileIcon';

const Navigation = ({ onRouteChange, isSignedIn, loadUser, toggleModal }) => {
  if(isSignedIn) {
    return (
      <nav>
          <Logo />
          <ProfileIcon onRouteChange={onRouteChange} toggleModal={toggleModal} />
      </nav>
    );
  } else {
    return (
      <nav>
        <Logo />
      </nav>
    );
  }
}

export default Navigation;