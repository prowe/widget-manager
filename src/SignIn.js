import * as firebase from "firebase";
import React, { Component } from 'react';

class SignIn extends Component {

    signIn = () => {
        console.log("Starting signIn");
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                console.log('signed in with result', result);
                result.name = result.additionalUserInfo.profile.name;
                this.props.onSignedIn(result);
            })
            .catch(err => {
                console.log('sign in error', err);
            });
    }

    render() {
        return (
            <button onClick={this.signIn}>Sign In with Google</button>
        );
    }
}

export default SignIn;