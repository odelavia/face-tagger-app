import React from 'react';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: ''
    }
  }

  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }

  saveAuthTokenInSessions = (token) => {
    window.sessionStorage.setItem('token', token);
  }

  onSubmitSignIn = () => {
    fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(response => response.json())
      .then(data => {
        if (data && data.success === "true") {
          this.saveAuthTokenInSessions(data.token)
          this.props.loadUser(data.user)
          this.props.onRouteChange('home');
        }
      })
      .catch(console.log)
  }

  render() {
    const { onRouteChange } = this.props;
    return (
          <div className="signin-container">
            <form id="sign_up">
              <h2 className='sign-header'>Sign In</h2>
              <label className='email'>
                  <p>Email</p>
                  <input className='email-input' onChange={this.onEmailChange} />
              </label>
              <label className='pass'>
                  <p>Password</p>
                  <input className='pass-input'onChange={this.onPasswordChange} />
              </label>
              <p className='forgot-pass'>Forgot your password?</p>
            </form>
            <button className='btn' onClick={this.onSubmitSignIn}>Sign in</button>
            <div className='remem-regis-links'>
              <label className='remember'>
                <input className='radio-input' type='checkbox' name='rememberMe'/>
                <p className='remember-text'>Remember me</p>
              </label>
              <p onClick={() => onRouteChange('register')} className='signup'>Register</p>
            </div>
          </div>
    );
  }
}

export default Signin;