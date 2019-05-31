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
            <div class="col-md-auto profile"><img
                    className="profilepic"
                    src="/logo/profilepic.jpg"
                    alt="..."
                  /></div>
            <div class="col col-lg-2"></div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col"></div>
              <div class="col"></div>
            </div>
            <div class="row">
              <div class="col"><img className="cardpic" src="/logo/milescard.png" alt="..."/></div>
              <div class="col"><img className="cardpic" src="/logo/wintercard.png" alt="..."/></div>
              <div class="col"><img className="cardpic" src="/logo/wolverinecard.png" alt="..."/></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
