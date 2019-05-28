import React, { Component } from 'react';
import { Route, Link, NavLink, Switch } from 'react-router-dom';
// import Home from './pages/Home';
// import Countries from './pages/Countries';
import Characters from './characters';
import singleCharacter from './singleCharacter';
import Comics from './comics';
import Login from './login';
import Signup from './signup';
import Home from './home';
import Profile from './profile';
import api from '../api';
import Navbar from './Navbar';
import MarvelWrapper from 'marvel-wrapper';


console.log(23454334534, process.env)
 
const marvel = new MarvelWrapper({
  privateKey: process.env.REACT_APP_PRIVATE_KEY,
  publicKey: process.env.REACT_APP_PUBLIC_KEY
});


export default class App extends Component {
  state = {
      countries: []
    
  }

  handleLogoutClick(e) {
    api.logout()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Marvel Fan Club</h1>
         
          {!api.isLoggedIn() && <NavLink to="/signup">Signup</NavLink>}
          {!api.isLoggedIn() && <NavLink to="/login">Login</NavLink>}
          {api.isLoggedIn() && <Link to="/" onClick={(e) => this.handleLogoutClick(e)}>Logout</Link>}
      
      
        </header>
        <Navbar/>
        <Switch>
        <Route path="/" exact component={Home} /> 
        <Route path="/profile" exact component={Profile} /> 
          <Route path="/characters" exact component={Characters} /> 
          <Route path="/singleCharacter/:id" exact component={singleCharacter} /> 
          <Route path="/comics" exact component={Comics} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route render={() => <h2>404</h2>} />
        </Switch>
      </div>
    );
  }
}