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
    marvelcharacters: [],
    comments: [],
    comment: '',
    usersname: "Nathan",

    
  }
  
    
    
    componentDidMount() {

      console.log(this)

    

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
        console.log('fetch ',res[0])
        this.fetchCharacterComments(res[0])
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

    fetchCharacterComments = (character) => {
      console.log('character',character)
      api.getComments(character).then(commentsAboutCharacter=>{
        console.log(commentsAboutCharacter)
        this.setState({comments:commentsAboutCharacter.result})
      })
    }

    showTheCharacters() {
      if(this.state.marvelcharacters.length > 0) {
        console.log("yyyeeeeessssss", this.state.marvelcharacters);
        let marvelcharacters = [...this.state.marvelcharacters][0]
        console.log(marvelcharacters)

        //this.fetchCharacterComments(marvelcharacters)
        
        // this.setState({character:marvelcharacters}, () => {
        //   //this.fetchCharacterComments(marvelcharacters) 
        // })
        return <h2>{marvelcharacters}</h2>

        
      }
    }

    setComment = (e) => {
      this.setState({
        comment:e.target.value
      })
    }
    saveComment = () => {
      console.log('save comment',this.state)
      api.saveComment(this.state).then((result)=>{
        console.log(result, this.state)
        this.setState({
          comments: [...this.state.comments, {comment: this.state.comment}]
        })
      })
    }

    showComments = () => {
      return this.state.comments.map(eachComment=>{
        console.log(eachComment)
        return <li>{eachComment.comment}  <span className="charposted">  posted by {eachComment.usersname}</span></li> 
      })
    }



    render() {
      return (
        <div className="randomCharacpage">
          <h2> Forum </h2>
          <p>Chat, discuss, inform...</p>
          
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
              <div class="col-lg-4 middleColumn" >
              <button onClick={(e) =>this.showCharacters(e)}>Get Character</button>
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
              
              {/* <button onClick={(e) =>this.showCharacters(e)}>Get Character</button> */}
              <p>{this.showTheCharacters()}</p>
              </div>
            </div>

              <input type="text" placeholder="comment" onChange={this.setComment}/>
              <button onClick={this.saveComment}>Post</button>
                {this.showComments()}
            {/* </Link> */}
            {/* <h4>{this.state.selectedcharacter.description}</h4> */}
          </div>
          
          
          
          
          
          
          
          
          {/* ----------- */}
        
        </div>
      )
    }
      
}; 

export default randomCharacter;
