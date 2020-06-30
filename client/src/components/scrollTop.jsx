import React, { Component } from 'react'

class ScrollTop extends Component {
  state = {  }
  render() { 
    return (
      <> 
      <a id="back-to-top" href="#" class="btn btn-primary btn-lg back-to-top" role="button"><i class="fas fa-chevron-up"></i></a>
  
      </>
     );
  }
}
 
export default ScrollTop;