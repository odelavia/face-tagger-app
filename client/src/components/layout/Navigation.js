import React from 'react';
import Logo from './Logo.js';
import ProfileIcon from '../user/ProfileIcon';

const Navigation = ({ onRouteChange, isSignedIn, toggleModal, user }) => {
  if(isSignedIn) {
    return (
      <nav>
          <Logo />
          <ProfileIcon onRouteChange={onRouteChange} toggleModal={toggleModal} user={user}/>
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