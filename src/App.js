import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from "firebase";
import SignIn from './SignIn';

class App extends Component {

  firebaseConfig = {
    apiKey: "AIzaSyA7shE2u51EcVRBF5N-G6JVuJFJW-UHXM8",
    authDomain: "widget-manager.firebaseapp.com",
    databaseURL: "https://widget-manager.firebaseio.com",
    projectId: "widget-manager",
    storageBucket: "widget-manager.appspot.com",
    messagingSenderId: "510530663887"
  };

  constructor() {
    super();
    this.state = {
      user: null
    };
    firebase.initializeApp(this.firebaseConfig);
  }

  get usersName() {
    return this.state.user && this.state.user.name;
  }

  handleSignedIn = (user) => {
    this.setState({
      user: user
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React {this.usersName}!</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <SignIn onSignedIn={this.handleSignedIn} />
        </p>
      </div>
    );
  }
}

export default App;
