import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data'
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer'

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.setState({
      data: dummyData
    })
  }

  addLike = id => {
    const data = [...this.state.data];
    data[id].likes++;
    this.setState({
      data: data
    })
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
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
