import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navigation">
        {/* <nav class="navbar navbar-dark bg-primary mb-3">
          <div class="container">
            <Link className="navbar-brand" to="/">
              Home
            </Link>
            <Link className="navbar-brand" to="/profile">
              Profile
            </Link>
            <Link className="navbar-brand" to="/characters">
              Characters
            </Link>
            <Link className="navbar-brand" to="/comics">
              Comics
            </Link> */}
         
          <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header">
                {/* <button
                  type="button"
                  class="navbar-toggle"
                  data-toggle="collapse"
                  data-target="#myNavbar"
                >
                  <span class="icon-bar" />
                  <span class="icon-bar" />
                  <span class="icon-bar" />
                </button> */}
                <img style={{width: '8vw', marginRight: '10px'}} src="/images/MarvelLogo.svg"/>
                <a className="navbar-brand" href="/">
                  Home
                </a>
                <a className="navbar-brand" href="/profile">
                  Profile
                </a>
                <a className="navbar-brand" href="/characters">
                  Characters
                </a>
                <a className="navbar-brand" href="/comics">
                  Comics
                </a>
              </div>
              {/* <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <a href="/logout">
                      <span class="glyphicon glyphicon-user" /> Logout
                    </a>
                  </li>
                </ul> */}
              {/* </div> */}
            </div>
          </nav>
      </div>
    
    );
  }
}

export default Navbar;
