import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Blog from './Blog';
import AboutPage from './AboutPage';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">ReactBlog</h1>
        </header>

        <div className="container">
          <Navigation />
          <Route exact path="/" component={Blog}/>
          <Route path="/about" component={AboutPage}/>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
