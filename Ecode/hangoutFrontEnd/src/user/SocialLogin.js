import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import { socialLogin, authenticate } from '../auth';

class SocialLogin extends Component {
    constructor() {
        super();
        this.state = {
            redirectToReferrer: false
        };
    }

    responseGoogle = response => {
<<<<<<< Updated upstream
=======
        // console.log('response', response);
>>>>>>> Stashed changes
        const tokenId = response.tokenId;
        const user = {
            tokenId: tokenId
        };

        socialLogin(user).then(data => {
<<<<<<< Updated upstream
            console.log('signin data: ', data);
=======
            // console.log('signin data: ', data);
            if (data.error) {
                console.log('Error Login. Please try again..');
            } else {
>>>>>>> Stashed changes
                // console.log('signin success - setting jwt: ', data);
                authenticate(data, () => {
                    console.log('social login response from api', data);
                    this.setState({ redirectToReferrer: true });
                });
<<<<<<< Updated upstream

=======
            }
>>>>>>> Stashed changes
        });
    };

    render() {
        // redirect
        const { redirectToReferrer } = this.state;
        if (redirectToReferrer) {
            return <Redirect to="/" />;
        }

        return (
            <GoogleLogin
                clientId="679380407525-2cvoah9gpsjjffc5k1p6atahhf2vqfl4.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
            />
        );
    }
}

export default SocialLogin;
