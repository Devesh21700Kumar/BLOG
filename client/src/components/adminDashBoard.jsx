import React, { Component } from "react";
import BlogCard from "./blogCard";
import { Link } from "react-router-dom";

class AdminDashBoard extends Component {
  state = {};
  render() {
    return (
      <>
      <div className="text-center shadows">
          <h3 className="display-4 white">Admin Dashboard</h3>
      </div>
        <div className="container">
          <div className="jumbotron gradient middle">
            <h1>Admin Page</h1>
            <hr className="light" />
            <Link className="btn btn-success btn-md" to="/add">
              Add A New Blog
            </Link>
          </div>
        </div>
        <div className="container white">
          <div className="jumbotron gradient middle">
            <h3 className="display-5">All Blogs</h3>
            <hr className="light" />
            <div className="white">
            <BlogCard loginCalled="true" ></BlogCard>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AdminDashBoard;
