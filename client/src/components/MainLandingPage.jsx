import React, { Component } from "react";
import {Link} from 'react-router-dom';

class MainLandingPage extends Component {
  state = {};

  render() {
    return (
      <div
        className="container-fluid shadows text-center middle"
        
      >
        <div className="container ">
          <div className="jumbotron gradient mt-8">
            <h4 className="display-3">BlogAway lets you get perspectives.</h4>
            <p className="lead">Because sometimes, someone else's ideas are all we need to gain a better perspective of life.</p>
            <p className="lead">BlogAway gives you that space.</p>
            <hr className="light"/>
            <Link to="/login" className="btn btn-dark mr-3">Login as admin</Link>

            <Link to="/blogs" className="btn btn-success">Explore</Link>

          </div>
        </div>
      </div>
    );
  }
}


export default MainLandingPage;
