import React from 'react';
import { fetchWithBody } from '../../../helpers'

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
    const { email, password, name } = this.state;
    fetchWithBody('register', 'POST', null, email, password, name)
    .then(user => {
      if (user.id) {
        this.props.loadUser(user)
        this.props.onRouteChange('home');
      }
    })
  }

  render() {
    const { onRouteChange } = this.props;
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
                  <input className='pass-input' onChange={this.onPasswordChange} />
              </label>
            </form>
            <button className='btn' onClick={this.onSubmitSignIn}>Submit</button>
            <p onClick={() => onRouteChange('signin')} className='signup'>Sign In</p>
          </div>
    );
  }
}

export default Register;