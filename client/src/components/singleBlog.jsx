import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class SingleBlog extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            blogTobeShown : null,
         }
    }
    blogShown = (arr) => {
        arr.map(arrList => {
            if(arrList.id ===this.props.id){
                this.setState({blogTobeShown : arrList})
                // console.log(this.state.blogTobeShown);
            }
        })

    }
    componentWillMount() {
        this.blogShown(this.props.blogs);
    }
    
    render() { 
        return (
            <> 
            <div className="container">
                {this.props.render(this.state.blogTobeShown)};
            </div>
            <div className="container">
                <Link to="/" className="btn btn-success">Back to MainPage</Link>
            </div>
            </>
         );
    }
}
 
export default SingleBlog;