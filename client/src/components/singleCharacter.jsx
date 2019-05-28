import React, { Component } from "react";
import MarvelWrapper from "marvel-wrapper";

const marvel = new MarvelWrapper({
  privateKey: process.env.PRIVATE_KEY,
  publicKey:  process.env.PUBLIC_KEY,
  limit: "20"
});

class singleCharacter extends Component {
  state = {
    selectedcharacter: {}
  };

  componentDidMount() {
  
    //marvel wrapper to fetch to that id from the api.... then you'll set it to state,  and then show the details belows
    marvel.character.getCharacter(this.props.match.params.id).then(response => {
      // do what you want with the response
      // console.log(response.data.results[0])
      console.log(response)

      marvel.comic.search(response.data.results[0].name).then(res => {
        // do what you want with the response
        if(response.data){
          this.setState({allComics:res.data.results, selectedcharacter: response.data.results[0]})

        }
      });
      // response.data.results.map(item => console.log(item))
      
    });
  }

  displayCharacter = () => {
    if (this.state.selectedcharacter.hasOwnProperty("name")) {
      return (
        <div className="characterdetails">
          <img
            className="charctersimg"
            src={
              this.state.selectedcharacter.thumbnail.path +
              "." +
              this.state.selectedcharacter.thumbnail.extension
            }
            alt=""
          />
          <h3>{this.state.selectedcharacter.name}</h3>
          {/* </Link> */}
          <h4>{this.state.selectedcharacter.description}</h4>
          <h5>{this.state.selectedcharacter.getComics}</h5>
              {this.state.allComics.map((item ,i)=> {
                return (<div key={i} className="comicslist">
                <img
                  className="comicsimg"
                  src={
                    item.thumbnail.path +
                    "." +
                    item.thumbnail.extension
                  }
                  alt=""
                />
               
                <h3>{item.name}</h3>
              
                <h4>{item.description}</h4>
               
              </div>)
              })}
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
export default singleCharacter;
