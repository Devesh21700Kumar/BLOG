import React, { Component } from 'react'
import { Link , BrowserRouter as Router} from 'react-router-dom';


class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
            <Router>
            <nav className="navbar navbar-expand-lg navbar-dark gradient sticky-top">
            <Link className="navbar-brand" to="/" >BlogAway</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Let's talk!
                  </Link>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="https://github.com/Devesh21700Kumar" target = "_blank">Github</a>
                    <a className="dropdown-item" href="https://www.facebook.com/profile.php?id=100039577306038" target = "_blank">Facebook</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="https://www.instagram.com/divinus_02/" target = "_blank">Instagram</a>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="https://www.linkedin.com/in/devesh-kumar-529982198/"  target = "_blank">Linkedin</a>
                </li>
              </ul>
              
            </div>
          </nav>
          </Router>
          </React.Fragment>
         );
    }
}
 
export default NavBar;