import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { closeNav } from '../../actions/nav';

class OutsideAlerter extends Component {
  constructor(props) {
    super(props);

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  /**
   * if clicked on outside of element
   */
  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
        if ( event.target.parentNode.className === 'navbar-toggler'|| event.target.className === 'navbar-toggler') return
        if(this.props.display === 'block' && event.target.parentNode.className !== 'navbar-toggler') {
          this.props.dispatch(closeNav());
      }
    }
  }

  render() {
    return <div className="outside-alerter" ref={this.setWrapperRef}>{this.props.children}</div>;
  }
}

OutsideAlerter.propTypes = {
  children: PropTypes.element.isRequired,
};

const mapStateToProps = (state) => {
 return {
  dropdownOpen:state.nav.dropdownOpen,
  display: state.nav.display
 }
}

export default connect(mapStateToProps)(OutsideAlerter);