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

  loadUserScores = () => {
    // { padding: "5px" }
    return this.state.users.map( (user, index) => {
      const vertPad = index === this.state.users.length - 1
                      ? {padding: "5px 0 0 0"}
                      : {padding: "5px 0"}
      return (
        <div key={index} className="table-rows">
          <div className="table-row" style={vertPad}>
            <div className="leaderboard-avatars">
              <img src="http://tachyons.io/img/logo.jpg" alt="avatar"></img>
              <div className="avatar-initial">{user.name[0]}</div>
            </div>
            <div className="leaderboard-names">{index + 1}. {user.name}</div>
            <div className="leaderboard-ranks">{user.entries}</div>
            <div className="leaderboard-created-ats">{new Date(user.joined).toLocaleDateString()}</div>
            <div className="leaderboard-ages">{user.age}</div>
          </div>
        </div>
      );
    })
  }

  render() {
    console.log(this.state.users.length)
    return (
      <Fragment>
      <h1>Leaderboards</h1>
      <div className="leaderboard-table">
        <div className="table-col-names">
          <div className="table-col-name first">Name</div>
          <div className="table-col-name">Rank</div>
          <div className="table-col-name">Joined</div>
          <div className="table-col-name last">Age</div>
        </div>
        {this.loadUserScores()}
      </div>
      </Fragment>
    );
  }
}

export default Leaderboards;