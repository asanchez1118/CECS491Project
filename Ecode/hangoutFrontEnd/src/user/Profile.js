import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { isAuthenticated } from "../auth";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      user: "",
      redirectToSignin: false

    };
  }

  componentDidMount() {
    const userId = this.props.match.params.userId;
     console.log("user id form route:", this.props.match.params.userId);
  }

  componentWillReceiveProps(props) {
    const userId = props.match.params.userId;

  }

  render() {
    const { redirectToSignin, user, posts } = this.state;
    if (redirectToSignin) return <Redirect to="/signin" />;

    return (
      <div className="container">
        <h2 className="mt-5 mb-5">Profile</h2>
        <div className="row">

          <div className="col-md-8">
            <div className="lead mt-2">
              <p>Hello: {isAuthenticated().user.name}</p>
              <p>Email: {isAuthenticated().user.email}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
