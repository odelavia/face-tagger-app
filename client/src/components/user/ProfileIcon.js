import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProfileIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isProfileOpen: this.props.isProfileOpen,
    };
  }


  render() {
    const { showDropdown } = this.props;

    return (
      <div className="icon-wrapper">
        <div className="icon-container">
          <div className="dropdown-toggle" onClick={() => showDropdown()}>
            <img className="icon-img" src="http://tachyons.io/img/logo.jpg" alt="avatar" />
            <div className="avatar-initial">{this.props.user.name[0]}</div>
          </div>
          <div className='dropdown-menu' style={{ display: this.props.display, marginTop: '20px', backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
            <a className="dropdown-item" onClick={() => { this.props.onRouteChange('home'); showDropdown(); }}>Home</a>
            <a className="dropdown-item" onClick={() => { this.props.onRouteChange('leaderboards'); showDropdown(); }}>LeaderBoard</a>
            <a className="dropdown-item" onClick={() => { this.props.toggleModal(); showDropdown(); }}>View Profile</a>
            <a className="dropdown-item" onClick={() => { this.props.onRouteChange('signout'); showDropdown(); }}>Sign Out</a>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log('this is redux state', state.navBar);
  return {
    dropdownOpen:state.nav.dropdownOpen,
    display: state.nav.display
  }
}

export default connect(mapStateToProps)(ProfileIcon);