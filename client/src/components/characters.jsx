import React, { Component } from "react";
import MarvelWrapper from "marvel-wrapper";
import { setTimeout } from "timers";
import { Link } from "react-router-dom";

const marvel = new MarvelWrapper({
  privateKey: process.env.REACT_APP_PRIVATE_KEY,
  publicKey: process.env.REACT_APP_PUBLIC_KEY,
  limit: "10"
});

var t; //for time delay on search

class Characters extends Component {
  state = {
    allCharacters: [],
    t: null
  };
  componentDidMount() {
    console.log("yo");
    // axios
    //   .get("https://comicvine.gamespot.com/api/characters/?api_key=${process.env.apiKey}&format=json")
    //   .then(response => {
    //     console.log("the list of characters info ----------- ", response);
    //     this.setState({ allCharacters: response.data });
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }

  searchCharacters = e => {
    let val = e.target.value;
    //let q = this.state.t
    window.clearTimeout(t);
    t = window.setTimeout(() => {
      marvel.character.search(val).then(response => {
        // do what you want with the response
        if (response.data) {
          this.setState({ allCharacters: response.data.results });
        }
      });
    }, 3000);
    //this.setState({t})
  };

  showCharacters = () => {
    return this.state.allCharacters.map((character, i) => {
      console.log(character);
      return (
        <div class="col-lg-4">
        <div class="card-deck">
        <div class="card characterscard" >
          <img
            src={character.thumbnail.path + "." + character.thumbnail.extension}
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">
              {" "}
              <Link exact to={`/singleCharacter/${character.id}`}>
                <h3>{character.name}</h3>
              </Link>
            </h5>
            
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        </div>
        </div>
        // <div className = "whole-list">
        // <div key={i} className="characterslist">
        //   <img
        //     className="charactersimg"
        //     src={
        //       character.thumbnail.path +
        //       "." +
        //       character.thumbnail.extension
        //     }
        //     alt=""
        //   />
        //   <Link exact to={`/singleCharacter/${character.id}`}>
        //   <h3>{character.name}</h3>
        //   </Link>
        //   {/* <h4>{character.description}</h4> */}
        //   {/* <p>{allBeers.description}</p>
        //   <p>Contributed by: {allBeers.contributed_by}</p> */}
        // </div>
        // </div>
      );
    });
  };

  render() {
    return (
      <div>
        <h1>Characters</h1>
        <input
          className="searchbar"
          type="text"
          placeholder="search..."
          onChange={this.searchCharacters}
        />
        <div className="entire-list container">
          <div class="row">
        {this.showCharacters()}
        </div>
        </div>
      </div>
    );
  }

  // render() {
  //   return (
  //     <div>
  //       marvel.character.getCharacters() .then(reponse =>{" "}
  //       {// do what you want with the response
  //       response => response.data.results.map(item => console.log(item))}
  //       )
  //     </div>
  //   );
  // }
}

export default Characters;
