import React from 'react';
// import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class ProfileIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
      display: 'none',
      isProfileOpen: this.props.isProfileOpen,
    };
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    })
  }

  showDropdown = () => {
    if (this.state.dropdownOpen === false) {
      this.setState({
        display: 'flex',
      })
    } else if (this.state.dropdownOpen === true) {
      this.setState({
        display: 'none',
      })
    }
  }


  render() {
    return (
      <div className="icon-wrapper" onClick={this.toggle}>
        <div className="icon-container">
          <div className="dropdown-toggle" onClick={() => this.showDropdown()}>
            <img className="icon-img" src="http://tachyons.io/img/logo.jpg" alt="avatar" />
            <div className="avatar-initial">{this.props.user.name[0]}</div>
          </div>
          <div className='dropdown-menu' style={{ display: this.state.display, marginTop: '20px', backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
            <a className="dropdown-item" onClick={() => { this.props.onRouteChange('home'); this.showDropdown(); }}>Home</a>
            <a className="dropdown-item" onClick={() => { this.props.onRouteChange('leaderboards'); this.showDropdown(); }}>LeaderBoard</a>
            <a className="dropdown-item" onClick={() => { this.props.toggleModal(); this.showDropdown(); }}>View Profile</a>
            <a className="dropdown-item" onClick={() => { this.props.onRouteChange('signout'); this.showDropdown(); }}>Sign Out</a>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileIcon;