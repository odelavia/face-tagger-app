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
            <div>{new Date(user.joined).toLocaleDateString()}</div>
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
          <div className="col-name first">Name</div>
          <div className="col-name">Rank</div>
          <div className="col-name">Joined</div>
          <div className="col-name last">Age</div>
        </div>
        {loadUsers}
      </div>
      </Fragment>
    );
  }
}

export default Leaderboards;