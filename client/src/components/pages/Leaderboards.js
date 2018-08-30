import React, { Component, Fragment } from 'react';
import { fetchWithoutBody } from '../../helpers'

class Leaderboards extends Component {
  constructor(props) {
    super(props);
    this.state = {
    users: []
    };
  }

  componentWillMount() {
    console.log('leader will mount')
    fetchWithoutBody(`leaderboards`, 'GET')
    .then(response => response.json())
    .then(response => {
    this.setState({
      users: response
    })
    });
  }


  render() {
    let loadUsers = this.state.users.map( (user, index) => {
      return (
        <div key={index}>
          <div>{user.name}</div>
          <div>{user.entries}</div>
          <div>{user.joined}</div>
          <div>{user.age}</div>
        </div>
      );
    })
    return (
      <Fragment>
      <h1>Leaderboards</h1>
      <div>
        <div className="col-names">
          <div>name</div>
          <div>rank</div>
          <div>joined</div>
          <div>age</div>
        </div>
        {loadUsers}
      </div>
      </Fragment>
    );
  }
}

export default Leaderboards;