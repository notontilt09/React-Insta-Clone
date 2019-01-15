import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data'
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer'

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      searchText: ''
    }
  }

  componentDidMount() {
    localStorage.getItem('data') === null ?
      this.setState({
        data: dummyData
      }) :
      this.setState({
        data: JSON.parse(localStorage.getItem('data'))
      })
  }

  handleSearch = e => {
    this.setState({
      searchText: e.target.value
    }, () => this.filterSearch())
  }

  filterSearch = () => {
    const posts = (document.querySelectorAll('.post'));
    posts.forEach(post => {
      if (post.children[0].textContent.indexOf(this.state.searchText) === -1) {
        post.classList.add('hide');
      } else {
        post.classList.remove('hide');
      }
    })
  }

  addLike = id => {
    const data = [...this.state.data];
    data[id].likes++;
    this.setState({
      data: data
    }, () => localStorage.setItem('data', JSON.stringify(this.state.data)));
  }

  render() {
    return (
      <div className="App">
        <SearchBar 
          searchText={this.state.searchText}
          handleSearch={this.handleSearch}  
        />
        {this.state.data.map((post, index) => {
          return <PostContainer 
            post={post}
            key={index}
            id={index}
            addLike={this.addLike}
          />
        })}

      </div>
    );
  }
}

export default App;
