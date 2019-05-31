import React, { Component } from 'react';
import { Route, Link, NavLink, Switch } from 'react-router-dom';
// import Home from './pages/Home';
// import Countries from './pages/Countries';
import Characters from './characters';
import singleCharacter from './singleCharacter';
import Collect from './collection';
import Login from './login';
import Signup from './signup';
import Home from './home';
import Profile from './profile';
import api from '../api';
import Navbar from './Navbar';
import MarvelWrapper from 'marvel-wrapper';
import randomCharacter from './randomCharacter';
import randomSingleCharacter from './randomSingleCharacter';

// import Landing from './LandingPage';


console.log(23454334534, process.env)
 
const marvel = new MarvelWrapper({
  privateKey: process.env.REACT_APP_PRIVATE_KEY,
  publicKey: process.env.REACT_APP_PUBLIC_KEY
});


export default class App extends Component {
  state = {
      countries: [],
      user: {}
    
  }

  handleLogoutClick(e) {
    api.logout()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Marvel Fan Club</h1>
          <img src = "/logo/MarvelLogo.svg" class="navlogo" alt="..."/>
          <br/>
          <NavLink to="/">Home</NavLink>
          {api.isLoggedIn() && <NavLink to="/profile">Profile</NavLink>}
          <NavLink to="/characters">Characters</NavLink>
          {/* {api.isLoggedIn() && <NavLink to="/randomCharacter">Random Character</NavLink>} */}
          {!api.isLoggedIn() && <NavLink to="/signup">Signup</NavLink>}
          {!api.isLoggedIn() && <NavLink to="/login">Login</NavLink>}
          {api.isLoggedIn() && <NavLink to="/randomSingleCharacter">Forum</NavLink>}
          {/* {!api.isLoggedIn() && <NavLink to="/">Landing</NavLink>} */}
          {api.isLoggedIn() && <Link to="/" onClick={(e) => this.handleLogoutClick(e)}>Logout</Link>}
      

        </header>
        {/* <Navbar/> */}
        <Switch>
        <Route path="/" exact component={Home} /> 
    <Route path="/profile" exact component={(props) => <Profile user={this.state.user} {...props} /> }/>


          <Route path="/characters" exact component={Characters} /> 
          <Route path="/singleCharacter/:id" exact component={singleCharacter} /> 
          <Route path="/randomCharacter" exact component={randomCharacter}/>
          <Route path="/randomSingleCharacter" exact component={randomSingleCharacter}/>
          <Route path="/collection" exact component={Collect} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route render={() => <h2>404</h2>} />
        </Switch>
      </div>
    );
  }
}