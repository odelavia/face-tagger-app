import React from 'react';
import Logo from './Logo.js';
import OutsideAlerter from '../user/OutsideAlerter';
import ProfileIcon from '../user/ProfileIcon';

const Navigation = ({ onRouteChange, isSignedIn, toggleModal, user }) => {
  if(isSignedIn) {
    return (
      <nav>
          <Logo onRouteChange={onRouteChange}/>
          <OutsideAlerter>
            <ProfileIcon onRouteChange={onRouteChange} toggleModal={toggleModal} user={user}/>
          </OutsideAlerter>
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