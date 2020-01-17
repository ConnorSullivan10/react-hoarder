import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import './Auth.scss';

class Auth extends React.Component {
  loginClickEvent = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  render() {
    return (
      <div className="Auth">
        <img className="authImg" src="https://i.ya-webdesign.com/images/icono-google-chrome-png-15.png" alt=""></img>
        <button className="btn btn-danger btn-lg" onClick={this.loginClickEvent}>Login with Google</button>
      </div>
    );
  }
}

export default Auth;
