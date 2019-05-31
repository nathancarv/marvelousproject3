import React, { Component } from "react";
import {Link} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="homepage">
        <div className="hometitle">"...And I am Iron man"</div>
        <footer id="sticky-footer" class="py-4 bg-dark text-white-50">
        <div class="container collectcard">
          <div class="row">
            <div class="col-lg-4">
              <div class="card-deck">
                <div class="card collectad">
                  <img
                    className="cardimg"
                    src="/logo/thanos.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body collectbody">
                    <h5 class="card-title">Thanos</h5>
                    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                  </div>
                </div>
                {/* <div clas="card collectad">
                  <img className="cardimg" src="/logo/thanos.jpg" class="card-img-top" alt="..."/>  
                </div>
                <div class="card-body collectbody">
                  <div class="card-title">
                    <h3> Thanos </h3>
                  </div>
                </div> */}
              </div>
              
            </div>
            <div class="col cardcaption">
                <h2> Collect cards and earn your respect!</h2>
                <h3>
                  {" "}
                  Gather cards by answering questions correctly. The more cards,
                  the better the fan.
                  <br/>
                  <Link to="/randomCharacter/">
                  <button type="button" class="btn btn-primary btn-lg">Get Cards!</button>
                  </Link>

                </h3>
              </div>
          </div>
        </div>
        </footer>
      </div>
    );
  }
}
export default Home;
