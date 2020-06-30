import React, { Component } from 'react';
import BlogCard from './blogCard';
// import ScrollingWrapper from './scrollTop';

class BlogPage extends Component {
    state = {  }
    render() { 
        return ( 
            <>
           
           <div className="container-fluid">
               <div className="jumbotron gradient">
               <BlogCard loginCalled="false"/>
               </div>
           </div>
            
            
            
          </>
          
         );
    }
}
 
export default BlogPage;