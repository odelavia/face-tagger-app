import React, { Fragment } from 'react';
import Home from '../pages/Home';
import Leaderboards from '../pages/Leaderboards';
import Signin from '../pages/auth/Signin';
import Register from '../pages/auth/Register';

const AppRoutes = ({ route, boxes, imageUrl, user, isSignedIn, onInputChange, onButtonSubmit, loadUser, onRouteChange }) => {
  return (
    <Fragment>
      { route === 'home' && isSignedIn === true
      ? <Home
          user={user}
          onInputChange={onInputChange}
          onButtonSubmit={onButtonSubmit}
          boxes={boxes}
          imageUrl={imageUrl}
        />
        : (
          route === 'leaderboards'
          ? <Leaderboards />
          : (
            route === 'signin' || route === 'signout'
            ? <Signin loadUser={loadUser} onRouteChange={onRouteChange}/>
            : <Register loadUser={loadUser} onRouteChange={onRouteChange}/>
            )
        )
    }
    </Fragment>
  );
};


export default AppRoutes;