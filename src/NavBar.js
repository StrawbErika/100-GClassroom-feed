import React, { Component } from 'react';


class NavBar extends Component{

  render() {

    const {title, section} = this.props
    return (
      <div>
        <h3> {title} </h3>
        <h4> {section} </h4>
      </div>
    )
  }
}

export default NavBar
