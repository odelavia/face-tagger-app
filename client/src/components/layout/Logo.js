import React from 'react';

const Logo = ({ isSignedIn, onRouteChange }) => {
    return (
        <a className='logo'
            onClick={ isSignedIn ? () => onRouteChange('home') : () => onRouteChange('signin')}
        >
            FaceTagger
        </a>
    );
}

export default Logo;