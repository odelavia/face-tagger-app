import React, { Component } from 'react';
import Logo from './Logo.js';
import OutsideAlerter from '../user/OutsideAlerter';
import ProfileIcon from '../user/ProfileIcon';
import { connect } from 'react-redux';
import { openNav, closeNav } from '../../actions';

class Navigation extends Component {

  showDropdown = () => {
    if (this.props.dropdownOpen === false) {
      this.props.dispatch(openNav())
    } else if (this.props.dropdownOpen === true) {
      this.props.dispatch(closeNav())
    }
  }

  render() {
    const { onRouteChange, isSignedIn, toggleModal, user } = this.props;

    if(isSignedIn) {
      return (
        <nav>
            <Logo onRouteChange={onRouteChange}/>
            <OutsideAlerter showDropdown={() => this.showDropdown()}>
              <ProfileIcon showDropdown={() => this.showDropdown()} onRouteChange={onRouteChange} toggleModal={toggleModal} user={user}/>
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
}

const mapStateToProps = (state) => {
  return {
    dropdownOpen:state.nav.dropdownOpen,
    display: state.nav.display
  }
}

export default connect(mapStateToProps)(Navigation);