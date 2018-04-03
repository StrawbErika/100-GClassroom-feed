import React, { Component } from 'react';

class ListPostOther extends Component{
      render(){
    return(
      <div class ="postOther">
        <h4> {this.props.title}</h4>
        <p> {this.props.body}</p>
      </div>
    )
  }
}

export default ListPostOther;
