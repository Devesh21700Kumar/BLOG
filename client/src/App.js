import React, { Component } from 'react';
import NavBar from './components/NavBar';
import MainLandingPage from './components/MainLandingPage';
import AdminLoginPage from './components/adminLoginPage';
import BlogPage from './components/blogPage';
import AdminDashBoard from './components/adminDashBoard';
import AddBlog from './components/addBlog';
import {ProtectedRoute} from './components/protectedroute';



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ScrollTop from './components/scrollTop';
class App extends Component {
  state = {  }
  render() { 
     

    return ( 
      <div className ="landing">
      <NavBar/>
      {/* <FontAwesomeIcon icon={faCoffee} /> */}
      <Router>
      <Switch>
        <Route path="/" exact>
        <MainLandingPage />
        </Route>
        <Route path="/login">
          <AdminLoginPage />

        </Route>
        <Route path="/blogs">
          <BlogPage/>
        </Route>
        <ProtectedRoute exact path="/dashboard" component = {AdminDashBoard} />
        <ProtectedRoute exact path="/add" component = {AddBlog} />
        
        <Route path="*" component={() => <div className="gradient"><h1 className="white crete middle">404 not found!</h1></div>} />
      </Switch>
      </Router>
      <ScrollTop/>
     
      </div>
     );
  }
}
 
export default App;