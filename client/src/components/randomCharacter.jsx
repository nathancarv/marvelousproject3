import React, { Component } from "react";
import axios from 'axios';
import api from '../api'
import MarvelWrapper from "marvel-wrapper";
// var random = 25
const marvel = new MarvelWrapper({
  privateKey: process.env.REACT_APP_PRIVATE_KEY,
  publicKey: process.env.REACT_APP_PUBLIC_KEY,
  limit: 10,
});
class randomCharacter extends Component {
  state = {
    marvelcharacters: []
    
  }
  
    
    
    componentDidMount() {

      // console.log("the characters from the server ----- ", this.state.marvelcharacters)
      
      // axios.get(`https://comicvine.gamespot.com/api/publisher/4010-31/?api_key=${process.env.REACT_APP_API_KEY}&format=json`)
      
      // .then(stuff=>{
        
      //   console.log("the stuff >>>>>>>>>>>>>>>>>>>>>>>>> ", stuff)
      // })
      
    }

    showCharacters(e) {
      e.preventDefault()

      this.theRandomChars()
      this.theMainChar()
      
      // console.log("getting ready to show characters random ------ ", process.env)
      // api.getRandomCharacters()
      // // axios.get('https://pokeapi.co/api/v2/pokemon')
      // .then(stuff=>{
        
      //   console.log("the stuff >>>>>>>>>>>>>>>>>>>>>>>>> ", stuff)
      // })
      // random = Math.floor(Math.random() * 1491)
       //marvel wrapper to fetch to that id from the api.... then you'll set it to state,  and then show the details belows

      // do what you want with the response
      // console.log(response.data.results[0])
        


      // marvel.comic.search(Math.floor(this.state.Male[Math.random() * this.state.Male.length])).then(res => {
      //   // do what you want with the response
      //   if (response.data) {
      //     this.setState({
      //       allComics: res.data.results,
      //       selectedcharacter: response.data.results[0]
      //     });
      //   }
      // });
      // response.data.results.map(item => console.log(item))


    // console.log("the characters from the server ----- ", this.state.marvelcharacters)
      
    }


    theMainChar() {
      console.log("The Main CHAR <<<<<<<<<")
      marvel.character.getCharacters()
      .then(response => {
        console.log("============================ ", response.data.results);

        var charArray = this.state.marvelcharacters
        charArray.splice(Math.floor(Math.random() * charArray.length), 0, response.data.results[Math.floor(Math.random() * response.data.results.length)])

        console.log(charArray)
        // this.setState({marvelcharacters: charArray})
      }).catch(err => console.log("error getting character random ------ ", err))
      // var totalCharacters = 1490;
      // var characterOffset = options.characterOffset || this.getRandomInt(0, totalCharacters);
      // return MarvelWrapper({
      //   apiUrl: '/v1/public/characters',
      //   params: {
      //     limit: options.totalCharacters || 1,
      //     offset: characterOffset
      //   },
      //   success: options.success,
      //   error: options.error
      // });
    }


    theRandomChars() {
      api.getRandomCharacters()
      .then(res => {
        console.log(" this is the random char res >>>>>>>>>>>> ", res)
        this.setState({marvelcharacters:res})
      }).catch(err => console.log("error getting random character random ------ ", err))
    }



    // getRandomInt(min, max) {
    //   return Math.floor(Math.random() * (max - min + 1)) + min;
    // }
    // getRandomCharacter(options) {
    //   var totalCharacters = 1490;
    //   var characterOffset = options.characterOffset || this.getRandomInt(0, totalCharacters);
    //   return MarvelWrapper({
    //     apiUrl: '/v1/public/characters',
    //     params: {
    //       limit: options.totalCharacters || 1,
    //       offset: characterOffset
    //     },
    //     success: options.success,
    //     error: options.error
    //   });
    // }

    showTheCharacters() {
      if(this.state.marvelcharacters.length > 0) {
        console.log("yyyeeeeessssss", this.state.marvelcharacters);
        
        return this.state.marvelcharacters.map((oneChar, i) => {
          return (
            <h2 key={i}>
              Name: {oneChar}
            </h2>
          )
        })
        
      }
    }




    render() {
      return (
        <div className="randomCharacpage">
          <h2> Answer the questions correctly and earn your favorite character cards! </h2>
          
          {/* button will generate this  */}
          
          
          
          <div class="container character-bio">
            <div class="row">
              <div class="col-lg-4">
                {/* <img
                  className="bio-image"
                  src={
                    this.state.selectedcharacter.thumbnail.path +
                    "." +
                    this.state.selectedcharacter.thumbnail.extension
                  }
                  alt=""
                /> */}
              </div>
              <div class="col caption">
              
              <button onClick={(e) =>this.showCharacters(e)}>Get Character</button>
              {this.showTheCharacters()}
              </div>
            </div>

            {/* </Link> */}
            {/* <h4>{this.state.selectedcharacter.description}</h4> */}
          </div>
          
          
          
          
          
          
          
          
          {/* ----------- */}
        
        </div>
      )
    }
      
}; 

export default randomCharacter;
