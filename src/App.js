import React, { Component } from 'react';
import './main.css';
import NavBar from './NavBar';
import SideBar from './SideBar';
import Posts from './Posts';

const pageData = {
  title: "CMSC 100 1st Sem 2017-18",
  section: "EF-1L",
  posts: [
    { title: "Exer 1 - Git Intro", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada eros a diam elementum, ut congue risus blandit. Aenean non lacus at arcu rutrum tempor. Donec tincidunt quis augue eu lacinia. Phasellus sodales pellentesque libero. Suspendisse sed volutpat turpis. Quisque vel augue ac quam imperdiet interdum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus ac nisi ut dui ornare pulvinar. Fusce molestie lectus sed odio pretium consectetur. Duis metus felis, consequat a laoreet in, consequat vitae nulla. Donec tellus eros, ullamcorper et lacinia eu, malesuada a arcu.", id: 1 },
    { title: "Exer 2 - Working with GIT", body: "Duis eget arcu sed velit pulvinar fringilla. Cras ac porta nunc. Proin vitae turpis vehicula lorem faucibus hendrerit. Phasellus non est tincidunt, tincidunt nisi quis, convallis ante. Suspendisse et mi sagittis, tincidunt eros ut, auctor velit. Morbi vitae rutrum justo. Etiam at eros condimentum, blandit urna a, finibus nisl. Nunc lacus turpis, egestas eget condimentum quis, condimentum interdum nisi. Vestibulum lacinia nec diam nec lobortis. Morbi tristique quis dolor in aliquet. In tristique commodo nunc a aliquet. Aenean in sagittis risus. Fusce rutrum dolor tortor, hendrerit rutrum mi iaculis in. Nullam eget felis orci. Quisque nibh massa, rutrum eget commodo a, laoreet ut leo.", id: 2 },
    { title: "Exer 3 - JavaScript Basics part 1", body: "Morbi velit odio, sodales id luctus sed, lacinia in purus. Pellentesque tortor metus, ultricies et magna eget, ultricies faucibus justo. Quisque quis venenatis dolor. Nulla vehicula tempor nibh a condimentum. Nunc porttitor pharetra nisi, sed pretium erat varius id. Aliquam erat volutpat. Cras et metus commodo, eleifend purus rutrum, vestibulum mi. Cras consequat dignissim posuere. In in lectus nec massa scelerisque laoreet. Donec mi lacus, eleifend dictum nulla a, congue pulvinar ex. Aenean venenatis, velit ornare tempor suscipit, tellus erat ullamcorper velit, eleifend semper ipsum leo et odio. Nunc rutrum, eros et mattis interdum, ante purus varius odio, at consectetur ligula mi cursus ipsum. Sed id volutpat enim, et feugiat dolor. Curabitur metus libero, tincidunt eget tellus nec, mollis hendrerit sem. Nam viverra dolor a vehicula posuere. Donec quis tortor et odio lacinia tempor.", id: 3 },
    { title: "Exer 4 - JavaScript Basics part 2", body: "Phasellus eu risus blandit velit vestibulum ullamcorper. Aenean libero neque, rhoncus non pretium ut, rhoncus sit amet augue. Nunc scelerisque velit eget nibh gravida, ac condimentum urna maximus. Quisque venenatis blandit facilisis. Integer quis ante purus. Fusce imperdiet dolor ac quam eleifend ultrices. Nam dapibus augue eget nibh sodales, at tristique augue lacinia. Nunc a nunc vel augue euismod maximus. Sed semper tempor magna quis aliquet.", id: 4 },
    { title: "Exer 5 - Intro to MongoDB", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada eros a diam elementum, ut congue risus blandit. Aenean non lacus at arcu rutrum tempor. Donec tincidunt quis augue eu lacinia. Phasellus sodales pellentesque libero. Suspendisse sed volutpat turpis. Quisque vel augue ac quam imperdiet interdum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus ac nisi ut dui ornare pulvinar. Fusce molestie lectus sed odio pretium consectetur. Duis metus felis, consequat a laoreet in, consequat vitae nulla. Donec tellus eros, ullamcorper et lacinia eu, malesuada a arcu.", id: 5 },
  ]
}

const topics = [
  'Web Technologies',
  'JavaScript',
  'MongoDB',
  'CSS',
  'HTML',
  'ReactJS'
]

class App extends Component {
  render() {
    return (
      <div>
      <div class = "header">
        <NavBar
          section= {pageData.section}
          title={pageData.title}
        />
      </div>

      <div class = "sidebar-section">
        <SideBar
          section= {topics}
          title={"Topics"}
        />
      </div>

      <div class = "posts">
        <Posts
          posts = {pageData.posts}
        />
      </div>

      </div>
    );
  }
}

export default App;
