import React, { Component } from 'react';

class ListPost extends Component{
      render(){
    return(
      <div class ="post">
        <h4> {this.props.title}</h4>
        <p> {this.props.body}</p>
      </div>
    )
  }
}

export default ListPost;
