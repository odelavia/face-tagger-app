import React from 'react';

const Logo = ({ onRouteChange }) => {
    return (
        <a className='logo' onClick={() => onRouteChange('home')}>
            FaceTagger
        </a>
    );
}

export default Logo;