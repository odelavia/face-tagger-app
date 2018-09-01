import React, { Component } from 'react';
import { fetchWithBody, fetchWithoutBody } from './helpers'
import Navigation from './components/layout/Navigation';
import Profile from './components/user/Profile';
import Modal from './components/user/Modal';
import AppRoutes from './components/routes/AppRoutes';
import './styles/main.css';

const initialState = {
  input: '',
  imageUrl: '',
  boxes: [],
  route: 'signin',
  isProfileOpen: false,
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: '',
    age: 18,
    pet: ''
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  componentDidMount() {
    const token = window.sessionStorage.getItem('token');
    if (token) {
      fetchWithBody('signin', 'POST', token, undefined)
        .then(data => {
          if (data && data.id) {
            fetchWithoutBody(`profile/${data.id}`, 'GET', token)
            .then(response => response.json())
            .then(user => {
              if (user && user.email) {
                this.loadUser(user)
                this.onRouteChange('home');
                // this.setState({
                //   isSignedIn: true
                // })
              }
            })
          }
        })
        .catch(console.log)
    }
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined,
      age: data.age,
      pet: data.pet
    }})
  }

  calculateFaceLocation = (data) => {
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return data.outputs[0].data.regions.map(face => {
      const clarifaiFace = face.region_info.bounding_box;
      return {
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height)
      }
    });
  }

  displayFaceBox = (boxes) => {
    this.setState({boxes: boxes});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    const token = window.sessionStorage.getItem('token');
    const { input, user } = this.state;
    if (input.length > 0) {
      this.setState({imageUrl: input});
        fetchWithBody('imageurl', 'POST', token, null, null, null, input)
        .then(response => {
          if (response) {
            fetchWithBody('image', 'PUT', token, null, null, null, null, user.id)
            .then(count => {
              this.setState(Object.assign(this.state.user, { entries: count}))
            })
            .catch(console.log)
          }
          this.displayFaceBox(this.calculateFaceLocation(response))
        })
        .catch(err => console.log(err));
    } else {
      console.log('add an image first')
    }
  }

  onRouteChange = (route) => {
    console.log('route is currently ', route)
    console.log('IsSignedIn is currently ', this.state.isSignedIn)
    if (route === 'signout') {
      sessionStorage.removeItem('token');
      this.setState(initialState)
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
      console.log('IsSignedIn is currently ', this.state.isSignedIn)
    }
    this.setState({route: route});
  }

  toggleModal = () => {
      this.setState(state => ({
        ...state,
        isProfileOpen: !state.isProfileOpen,
      }));
  }

  render() {
    const { isSignedIn, imageUrl, route, boxes, isProfileOpen, user } = this.state;
    return (
      <div className="App">
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} toggleModal={this.toggleModal} user={this.state.user}/>
        {
          isProfileOpen &&
          <Modal>
            <Profile isProfileOpen={isProfileOpen} toggleModal={this.toggleModal} user={user} loadUser={this.loadUser} />
          </Modal>
        }
        <AppRoutes
          isSignedIn={isSignedIn}
          route={route}
          boxes={boxes}
          imageUrl={imageUrl}
          user={user}
          loadUser={this.loadUser}
          onRouteChange={this.onRouteChange}
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
      </div>
    );
  }
}

export default App;
