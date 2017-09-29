import React, { Component } from 'react';
import Navigation from './Navigation';
import Blog from './Blog';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">ReactBlog</h1>
        </header>

        <div className="container">
          <Navigation />
          <Blog />
        </div>
      </div>
    );
  }
}

export default App;
