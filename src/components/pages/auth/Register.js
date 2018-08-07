import React from 'react';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: ''
    }
  }

  onNameChange = (event) => {
    this.setState({name: event.target.value})
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

  onSubmitSignIn = () => {
    fetch('http://localhost:3000/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name
      })
    })
    .then(response => response.json())
    .then(user => {
      if (user.id) {
        this.props.loadUser(user)
        this.props.onRouteChange('home');
      }
    })
  }

  render() {
    return (
          <div className="register-container">
            <form id="sign_up">
              <h2 className='sign-header'>Register</h2>
              <label className='name'>
                  <p>Name</p>
                  <input className='name-input' onChange={this.onNameChange} />
              </label>
              <label className='email'>
                  <p>Email</p>
                  <input className='email-input' onChange={this.onEmailChange} />
              </label>
              <label className='pass'>
                  <p>Password</p>
                  <input className='pass-input' onClick={this.onPasswordChange} />
              </label>
            </form>
            <button className='btn' onClick={this.onSubmitSignIn}>Submit</button>
          </div>
    );
  }
}

export default Register;