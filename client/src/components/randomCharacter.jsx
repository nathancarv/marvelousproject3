import React, { Component } from "react";
import axios from 'axios';
import api from '../api'
import MarvelWrapper from "marvel-wrapper";
const marvel = new MarvelWrapper({
  privateKey: process.env.REACT_APP_PRIVATE_KEY,
  publicKey: process.env.REACT_APP_PUBLIC_KEY,
  limit: "10"
});

class randomCharacter extends Component {
  state = {
      Male:["Levi Ackerman", "Keanu Coupet", "Nathaniel Carvajal", "Gon Freecss", "Killua Zoldyck", "Justin Martinez", "Shoto Todoroki", "Bruce Wayne", "Steven Rogers", "Tony Stark", "Peter Parker", "Clark Kent", "James Howlett", "Max Eisenhardt", "Xavier Charles", "Jason Todd", "Wally West", "Itachi Uchiha", "Erwin Smith", "John Wick"],
      Female:["Mikasa Ackerman", "Princess Diana", "Samantha Parrington", "Donna Troy", "Anna Marie", "Jean Grey", "Cindy Reynolds", "Analeza Newman","Lizzie McGuire", "Jona Stark", "Arya Stark", "Brienne Tarth", "Carrie Kelley", "Natalia Romanova", "Wanda Maximoff", "Carol Danvers", "Jessie Darius", "Raven Darkholme", "Okoye", "Evelyn Salt"]
    }
    
    
    componentDidMount() {
      
      // axios.get(`https://comicvine.gamespot.com/api/publisher/4010-31/?api_key=${process.env.REACT_APP_API_KEY}&format=json`)
      
      // .then(stuff=>{
        
      //   console.log("the stuff >>>>>>>>>>>>>>>>>>>>>>>>> ", stuff)
      // })
      
    }

    showCharacters() {
      // console.log("getting ready to show characters random ------ ", process.env)
      // api.getRandomCharacters()
      // // axios.get('https://pokeapi.co/api/v2/pokemon')
      // .then(stuff=>{
        
      //   console.log("the stuff >>>>>>>>>>>>>>>>>>>>>>>>> ", stuff)
      // })

       //marvel wrapper to fetch to that id from the api.... then you'll set it to state,  and then show the details belows
      marvel.character.getCharacter(this.props.match.params.id).then(response => {
      // do what you want with the response
      // console.log(response.data.results[0])
        console.log(response);

      marvel.comic.search(Math.floor(this.state.Male[Math.random() * this.state.Male.length])).then(res => {
        // do what you want with the response
        if (response.data) {
          this.setState({
            allComics: res.data.results,
            selectedcharacter: response.data.results[0]
          });
        }
      });
      // response.data.results.map(item => console.log(item))
    });
    }

    render() {
      return (
        <div>
          <h2> Random Characters </h2>
          {this.showCharacters()}   
          {/* button will generate this  */}
        </div>
      )
    }
      
};

export default randomCharacter;
