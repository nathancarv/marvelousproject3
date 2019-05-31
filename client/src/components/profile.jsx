import React, { Component } from "react";

class Profile extends Component {
  state={
    username: ""
  }
  componentDidMount(){
    let user = this.props.username;
    console.log(user);
    this.setState({
      user
    })
  }
  render() {
    return (
      <div className="profilepage">
        <div class="container">
          <div class="row justify-content-md-center">
            <div class="col col-lg-2"></div>
            <div class="col-md-auto"></div>
            <div class="col col-lg-2"></div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col"></div>
              <div class="col"></div>
            </div>
            <div class="row">
              <div class="col"></div>
              <div class="col"></div>
              <div class="col"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
