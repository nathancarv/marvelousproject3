import React, { Component } from "react";
import MarvelWrapper from "marvel-wrapper";

const marvel = new MarvelWrapper({
  privateKey: process.env.REACT_APP_PRIVATE_KEY,
  publicKey: process.env.REACT_APP_PUBLIC_KEY,
  limit: "20"
});

class singleComic extends Component {
  state = {
    selectedcomic: {}
  };

  componentDidMount() {
  
    //marvel wrapper to fetch to that id from the api.... then you'll set it to state,  and then show the details belows
    marvel.comic.getComic(this.props.match.params.id).then(response => {
      // do what you want with the response
      // console.log(response.data.results[0])
      console.log(response)

      marvel.comic.search(response.data.results[0].name).then(res => {
        // do what you want with the response
        if(response.data){
          this.setState({selectedcomic:res.data.results})

        }
      });
      // response.data.results.map(item => console.log(item))
      
    });
  }

  displayComic = () => {
    if (this.state.selectedcomic.hasOwnProperty("name")) {
      return (
        <div className="comicdetails">
          <img
            className="comicsimg"
            src={
              this.state.selectedcomic.thumbnail.path +
              "." +
              this.state.selectedcomic.thumbnail.extension
            }
            alt=""
          />
          <h3>{this.state.selectedcomic.name}</h3>
          {/* </Link> */}
          <h4>{this.state.selectedcomic.description}</h4>
          {/* <h5>{this.state.selectedcomic.getComics}</h5> */}
              {/* {this.state.allComics.map((item ,i)=> {
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
               
              </div>) */}
              {/* })} */}
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
    return <div>{this.displayComic()}</div>;
  }
}
export default singleComic;