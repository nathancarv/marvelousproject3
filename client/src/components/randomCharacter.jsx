import React, { Component } from "react";
import axios from 'axios';

class randomCharacter extends Component {
  state = {
    selectedcharacter: {}
  };
  

  componentDidMount() {
    axios.get(`https://comicvine.gamespot.com/api/characters/?api_key=${process.env.REACT_APP_API_KEY}&format=json`)
      .then(stuff=>console.log(stuff))
   // marvel wrapper to fetch to that id from the api.... then you'll set it to state,  and then show the details belows
    // marvel.character.getCharacter(this.props.match.params.id).then(response => {
    //   // do what you want with the response
    //   // console.log(response.data.results[0])
    //   console.log(response);

    //   marvel.comic.search(response.data.results[0].name).then(res => {
    //     // do what you want with the response
    //     if (response.data) {
    //       this.setState({
    //         allComics: res.data.results,
    //         selectedcharacter: response.data.results[0]
    //       });
    //     }
    //   });
    //   // response.data.results.map(item => console.log(item))
    // });

    console.log()
  }

  displayCharacter = () => {
    if (this.state.selectedcharacter.hasOwnProperty("name")) {
      return (
        <div className="characterdetails">
          <div class="container character-bio">
            <div class="row">
              <div class="col-lg-4">
                <img
                  className="bio-image"
                  src={
                    this.state.selectedcharacter.thumbnail.path +
                    "." +
                    this.state.selectedcharacter.thumbnail.extension
                  }
                  alt=""
                />
              </div>
              <div class="col caption">
                <h2>{this.state.selectedcharacter.name}</h2>
                <h3>{this.state.selectedcharacter.description}</h3>
              </div>
            </div>

            {/* </Link> */}
            {/* <h4>{this.state.selectedcharacter.description}</h4> */}
          </div>
          <h5>{this.state.selectedcharacter.getComics}</h5>

          <div class="container comicdetails">
            <div class="row">
              {this.state.allComics.map((item, i) => {
                return (
                  <div class="col-lg-4">
                    <div class="card-deck">
                      <div class="card comicscard">
                        {/* <div key={i} className="comicslist"> */}
                        <img
                          className="comicsimg"
                          src={
                            item.thumbnail.path + "." + item.thumbnail.extension
                          }
                          class="card-img-top"
                          alt="..."
                        />
                        <div class="card-body comics">
                          <div class="card-title">
                            <h3>{item.title}</h3>

                            <h4>{item.description}</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* <p>{allBeers.description}</p> */}
          {/* <p>Contributed by: {allBeers.contributed_by}</p> */}
        </div>
      );
    } else {
      return "";
    }
  };
  render() {
    console.log(this.state.allComics);
    return <div>{this.displayCharacter()}</div>;
  }
}
export default randomCharacter;
