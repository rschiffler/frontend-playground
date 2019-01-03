// Libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import ViewPostsContainer from './posts/viewPostsContainer';

class App extends Component {
  render() {
    return (
      <ViewPostsContainer />
    );
  }
}

export default connect()(App);
