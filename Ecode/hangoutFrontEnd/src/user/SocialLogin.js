import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import GoogleLogin from "react-google-login";
import { socialLogin, authenticate } from "../auth";


class SocialLogin extends Component {
    constructor() {
        super();
        this.state = {
            redirectToReferrer: false
        };
    }

    responseGoogle = response => {
        const tokenId = response.tokenId;
        const user = {
            tokenId: tokenId
        };
        socialLogin(user).then(data => {
            console.log("signin data: ", data);
            if (data.error) {
                console.log("Error Login. Please try again.");
            }
            else {
                console.log("signin successful - setting jwt: ", data);
                authenticate(data, () => {
                    this.setState({ redirectToReferrer: true });
                })
            }
        });
    };

    render() {
        const { redirectToReferrer } = this.state;
        if (redirectToReferrer) {
            return <Redirect to="/" />;
        }

        return (
            <GoogleLogin
                clientID="313850488232-0v41ja1ucr85p6u7b94mthn0l6h5cpd5.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
            />
        );
    }
}
export default SocialLogin;
