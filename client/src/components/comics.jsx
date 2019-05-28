import React, { Component } from "react";
import MarvelWrapper from "marvel-wrapper";
import { Link } from "react-router-dom";

const marvel = new MarvelWrapper({
  privateKey: process.env.REACT_APP_PRIVATE_KEY,
  publicKey: process.env.REACT_APP_PUBLIC_KEY,
  limit: "10"
});

var t; //for time delay on search

class Comics extends Component {
  state = {
    allComics: [],
    t: null
  };
  componentDidMount() {
    console.log(marvel);
  }

  searchComics = e => {
    let val = e.target.value;

    window.clearTimeout(t);
    t = window.setTimeout(() => {
      marvel.comic.search(val).then(response => {
        // do what you want with the response
        if (response.data) {
          this.setState({ allComics: response.data.results });
        }
      });
    }, 3000);
  };

  showComics = () => {
    return this.state.allComics.map((comic, i) => {
      return (
        <div key={i} className="comicslist">
          <img
            className="comicsimg"
            src={comic.thumbnail.path + "." + comic.thumbnail.extension}
            alt=""
          />
            <h3>{comic.title}</h3>
          <h4>{comic.description}</h4>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <h1> Comics </h1>
        <input
          type="text"
          placeholder="search..."
          onChange={this.searchComics}
        />
        {this.showComics()}
      </div>
    );
  }
}

export default Comics;
