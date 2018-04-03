import React, { Component } from 'react';
import ListTopics from './ListTopics'

class SideBar extends Component{

  render() {

    const {title, section} = this.props
    return (
      <div>
        <h3> {title} </h3>

        {
          section.map((section, index) => {
            return <ListTopics key = {index} data = {section}/>
          })
        }

      </div>
    )
  }
}

export default SideBar
