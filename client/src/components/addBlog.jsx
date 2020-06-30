import React, { Component } from "react";
import BlogCard from "./blogCard";

import blogService from "../services/blogService";

class AddBlog extends Component {
  state = {
    title: "",
    content: "",
    url: "",
    date: "",
  };

  handleTitle = async (e) => {
    await this.setState({ title: e.target.value });
    // console.log(this.state.title);
  };
  handleContent = async (e) => {
    await this.setState({ content: e.target.value });
    // console.log(this.state.content);
  };
  handleDate = async (e) => {
    await this.setState({ date : e.target.value });
    // console.log(this.state.content);
  };
  handleImage = async (e) => {
    await this.setState({ url: e.target.value });
    // console.log(this.state.content);
  };
  handleSubmit = (e) => {
    //   e.preventDefault();
    this.getNewBlogs();
  };
  getNewBlogs = () => {
    blogService.postOne(this.state.title, this.state.content, this.state.date, this.state.url);
  };
  render() {
    return (
      <>
        <div className="text-center gradient shadows">
          <h3 className="display-4">Admin Dashboard</h3>
        </div>
        <div className="container-fluid middle ">
          <div className="jumbotron gradient">
            <div className="middle">
              <h3 className="display-4">Add a New Blog here</h3>
            </div>
            <form>
              <div className="form-group crete">
                <label for="exampleInputEmail1" className="lead">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Blog title"
                  value={this.state.title}
                  onChange={this.handleTitle}
                />
              </div>
              <div class="form-group crete">
                <label for="exampleFormControlTextarea1" className="lead">
                  Content
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="20"
                  value={this.state.content}
                  onChange={this.handleContent}
                ></textarea>
                <div className="form-group crete">
                  <label for="exampleInputEmail1" className="lead">
                    Date Posted:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Blog Date"
                    value={this.state.date}
                    onChange={this.handleDate}
                  />
                </div>
                <div className="form-group crete">
                  <label for="exampleInputEmail1" className="lead">
                    Image URL
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Blog Image"
                    value={this.state.url}
                    onChange={this.handleImage}
                  />
                </div>
                <p></p>
                <div className="middle">
                  <button
                    className="btn btn-light"
                    type="submit"
                    onClick={this.handleSubmit}
                  >
                    Add
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="container"></div>
        <div className="container">
          <div className="jumbotron gradient middle">
            <h3 className="display-5">All Blogs</h3>
            <hr className="light" />
            <div className="black">
              <BlogCard loginCalled="true"></BlogCard>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AddBlog;
