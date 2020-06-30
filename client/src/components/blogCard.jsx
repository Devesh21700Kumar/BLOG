import React, { Component } from "react";
import blogService from "../services/blogService";
import { Link, Redirect } from "react-router-dom";
import SingleBlog from "./singleBlog.jsx";
import {
  faCalendarTimes,
  faMale,
  faAngleRight,
  faFireAlt,
  faHeart,
  faCommentAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class BlogCard extends Component {
  state = {
    data: "",
    loginCalled: false,
    singleView: false,
    viewId: null,
    date: "",
    editMode: false,
    title: "",
    content: "",
    url: "",
    likes : 0,
    comments : [],
    commentsRendered : [],
    commentFinal : [],
  };

  componentDidMount() {
    this.getBlogs();
    console.log(this.props.loginCalled);
  }
  handleTitle = async (e) => {
    await this.setState({ title: e.target.value });
    // console.log(this.state.title);
  };
  handleContent = async (e) => {
    await this.setState({ content: e.target.value });
    // console.log(this.state.content);
  };
  handleDate = async (e) => {
    await this.setState({ date: e.target.value });
    // console.log(this.state.content);
  };
  handleImage = async (e) => {
    await this.setState({ url: e.target.value });
    // console.log(this.state.content);
  };
  handleSubmit = (e) => {
    //   e.preventDefault();
    this.getNewBlogs();
    this.refreshPage();
  };
  getNewBlogs = async () => {
    const res = await blogService.editOne(
      this.state.viewId,
      this.state.title,
      this.state.content,
      this.state.url
    );
    console.log("working", res);
  };

  getBlogs = async () => {
    const today = new Date(),
      date =
        today.getDate() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getFullYear();
    this.setState({ date: date });
    let res = await blogService.getAll();
    console.log(res);
    this.setState({ data: res.data });
    console.log(this.state.data);
  };
  openBlog = (id) => {
    const newView = !this.state.singleView;
    this.setState({ singleView: newView });
    this.state.data.blogs.map((blog) => {
      if (blog.id === id) {
        this.setState({ title: blog.title });
        this.setState({ content: blog.content });
        this.setState({ url: blog.imageurl });
        this.setState({likes : blog.likes});
        this.setState({commentsRendered : blog.comments});
      }
    });
    this.setState({ viewId: id });
  };
  refreshPage = () => {
    window.location.reload();
  };
  handleDelete = async (id) => {
    let res = await blogService.deleteOne(id);
    console.log(res);
    alert("Blog post deleted");
    this.refreshPage();
  };
  handleLike = async () => {
    await this.setState({likes : this.state.likes + 1});
    const res = await blogService.postLike(this.state.viewId, this.state.likes);
  }
  handleComment  = async (e) => {
    const comments = this.state.comments;
    comments.push(e.target.value);
    await this.setState({comments : comments});
    console.log(this.state.comments);
  }
  handleCommentSubmit = async (e) => {
    const commentsToRender = this.state.comments;
    const finalComment = commentsToRender[commentsToRender.length -1];
    console.log(finalComment);
    const toBeUpdated = this.state.commentsRendered;
    toBeUpdated.push(finalComment);
    await this.setState({commentsRendered : toBeUpdated});
    const res = await blogService.postComment(this.state.viewId, this.state.commentsRendered);

  }

  renderBlogs = (blog) => {
    return (
      <div className="main">
        <div className="cards gradient-diff black ">
          <div className="image-data my-3">
            <div className="background-image">
              <img
                src={
                  blog.imageurl
                    ? blog.imageurl
                    : "https://picsum.photos/700/400"
                }
                alt="Card image cap"
                className="img-fluid mr-3"
              />
            </div>
            <div className="publication-details my-3">
              <p>
                <FontAwesomeIcon icon={faMale} className="mr-2 ml-2 " /> Devesh
              </p>
              <span className="date">
                <FontAwesomeIcon icon={faCalendarTimes} className="mr-2 ml-2" />{" "}
                {blog.date ? blog.date : this.state.date}
              </span>
              <p className="lead"><FontAwesomeIcon icon={faHeart} className="mr-3" /> : {blog.likes ? blog.likes : 0}</p>
              <p className="lead"><FontAwesomeIcon icon={faCommentAlt} className="mr-3" />: {blog.comments.length} </p>

              <button
                className="btn btn-dark btn-sm ml-3"
                onClick={() => this.openBlog(blog.id)}
              >
                More
                <FontAwesomeIcon icon={faAngleRight} className="ml-1" />
              </button>
            </div>
          </div>
          <div className="post-data pad">
            <h3 className="title display-5 crete">
              {blog.title.length > 20
                ? blog.title.substr(0, 20) + "..."
                : blog.title}
            </h3>
            <p className="description crete">
              {blog.content.length > 1000
                ? blog.content.substr(0, 100)
                : blog.content.substr(0, blog.content.length / 2)}{" "}
              ....
            </p>
            <div className="cta">
              {this.props.loginCalled === "true" ? (
                <>
                  <Link
                    to="/dashboard"
                    className="btn btn-danger ml-3 mr-3 btn-sm"
                    onClick={() => this.handleDelete(blog.id)}
                  >
                    Delete
                  </Link>{" "}
                  <button
                    type="submit"
                    className="btn btn-primary mr-3 btn-sm"
                    onClick={() => {
                      this.openBlog(blog.id);
                      this.setState({ editMode: true });
                    }}
                  >
                    Edit
                  </button>{" "}
                </>
              ) : (
                <p></p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };
  renderComment = (comment) => {
    return (
      <p><FontAwesomeIcon icon={faCommentAlt} className="mr-2" /> {comment}</p>
    )
  }
  renderBlogSingle = (blog) => {
    return (
      <div className="main">
        {this.state.editMode === false ? (
          <div className="parent">
            <div className="jumbotron whitebg crete black ">
              <img
                src={
                  blog.imageurl
                    ? blog.imageurl
                    : "https://picsum.photos/700/400"
                }
                alt="Card image cap"
                className="img-fluid mr-3"
              />
              <div className="container">
                <h2 className="display-4">{blog.title}</h2>
                <hr className="black" />
                <div className="publication-details my-3">
                  <p>
                    <FontAwesomeIcon icon={faMale} className="mr-2 ml-2 " />{" "}
                   Devesh
                  </p>
                  <span className="date">
                    <FontAwesomeIcon
                      icon={faCalendarTimes}
                      className="mr-2 ml-2"
                    />{" "}
                    {blog.date ? blog.date : this.state.date}
                  </span>
                  <p className="lead">Likes : {blog.likes ? blog.likes : 0}</p>
                </div>
                <div className="main-contents">
                  <p className="lead">{blog.content}</p>
                </div>
              </div>
            </div>
            <div className="likes-comments jumbotron gradient">
              <button className="button" onClick={this.handleLike}>
                <FontAwesomeIcon icon={faFireAlt} />
              </button>
              <span class="ml-4 white lead shadows">
                Likes : 
                 {this.state.likes}
              </span>
            </div>
            <div className="comments white shadows lead">
              <div className="comments-list">
                {(this.state.commentsRendered ? this.state.commentsRendered.map(comment => this.renderComment(comment)) : <p></p>)};
              </div>
              <div className="form-group crete">
                <label for="exampleInputEmail1" className="lead">
                  Comment
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder=""
                  onChange={this.handleComment}
                />
              </div>
              <button className ="btn btn-outline-success" onClick={this.handleCommentSubmit}>Submit</button>
            </div>
          </div>
        ) : (
          <div className="edit">
            <form>
              <div className="form-group crete">
                <label for="exampleInputEmail1" className="lead">
                  Title
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  rows="1"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
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
              </div>
              <div className="form-group crete">
                <label for="exampleInputEmail1" className="lead">
                  Image URL
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  rows="1"
                  aria-describedby="emailHelp"
                  value={this.state.url}
                  onChange={this.handleImage}
                />
              </div>
            </form>
            <div className="submit">
              <button
                className="btn btn-success"
                type="submit"
                onClick={this.handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            {this.state.singleView === false ? (
              this.state.data && this.state.data.count > 0 ? (
                this.state.data.blogs.map((blog) => this.renderBlogs(blog))
              ) : (
                <p className="white">Loading../No Blogs</p>
              )
            ) : (
              <SingleBlog
                id={this.state.viewId}
                render={this.renderBlogSingle}
                blogs={this.state.data.blogs}
              />
            )}
          </div>
        </div>
      </>
    );
  }
}

export default BlogCard;
