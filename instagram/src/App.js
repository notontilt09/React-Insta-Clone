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
      searchText: '',
    }
  }

  componentDidMount() {
    // if nothing in local storage, hydrate this.state.data with dummyData
    localStorage.getItem('data') === null ?
      this.setState({
        data: dummyData,
      }) :
      // if 'data' exists in local storage, hydrate this.state.data with that data
      this.setState({
        data: JSON.parse(localStorage.getItem('data'))
      });
  }

  // method for searching posts based on user input, callback runs filterSearch method
  handleSearch = e => {
    this.setState({
      searchText: e.target.value
    }, () => this.filterSearch())
  }

  // hide all posts in which the user input search doesn't exist within the usernames of the posts
  filterSearch = () => {
    // grab all posts
    const posts = (document.querySelectorAll('.post'));
    // compare user input to username of post, set display to none if no match
    posts.forEach(post => {
      if (post.children[0].textContent.indexOf(this.state.searchText) === -1) {
        post.classList.add('hide');
      } else {
        post.classList.remove('hide');
      }
    })
  }

  // if user hasn't liked a photo, clicking the heart will add 1 to number of likes onClick.  If they have clicked, subtract 1 from likes onClick.
  addLike = id => {
    const data = [...this.state.data];
    // if user hasn't liked (initial state)
      data[id].likes++;
      this.setState({
        data: data,
      }, () => localStorage.setItem('data', JSON.stringify(this.state.data)));
      // if user has already liked
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
