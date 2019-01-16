import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage'

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      searchText: '',
    }
  }

  render() {
    return (
      <div className="App">
        <PostsPage />
      </div>
    );
  }
}

export default App;
