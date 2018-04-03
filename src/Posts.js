import React, { Component } from 'react';
import ListPost from './ListPost'
import ListPostOther from './ListPostOther'

class Posts extends Component{

  render() {

    const {posts} = this.props
    return (
      <div>
        {
          posts.map((post, index) => {
            if(index%2==0){
              return <ListPost key = {index} title={post.title} body={post.body}/>
            }else{
              return <ListPostOther key = {index} title={post.title} body={post.body}/>
            }
          })
        }
      </div>
    )
  }
}

export default Posts
