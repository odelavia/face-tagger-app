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
        <div key={index} className="table-rows">
          <div className="table-row">
            <div>{user.name}</div>
            <div>{user.entries}</div>
            <div>{user.joined}</div>
            <div>{user.age}</div>
          </div>
        </div>
      );
    })
    return (
      <Fragment>
      <h1>Leaderboards</h1>
      <div className="leaderboard-table">
        <div className="col-names">
          <div className="col-name first">name</div>
          <div className="col-name">rank</div>
          <div className="col-name">joined</div>
          <div className="col-name last">age</div>
        </div>
        {loadUsers}
      </div>
      </Fragment>
    );
  }
}

export default Leaderboards;