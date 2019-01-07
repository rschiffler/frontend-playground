// Libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// Utils
import Paths from './common/paths';

// Components
import LandingContainer from './landingContainer';
import ViewPostsContainer from './posts/viewPostsContainer';
import { mainTheme } from './common/mainTheme';
import { GlobalStyles } from './common/globalStyles';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={mainTheme}>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to={Paths.Home}>Home</Link>
                </li>
                <li>
                  <Link to={Paths.Posts}>View all posts</Link>
                </li>
              </ul>
            </nav>

            <Route path={Paths.Home} exact component={LandingContainer} />
            <Route path={Paths.Posts} component={ViewPostsContainer} />

            <GlobalStyles />

          </div>
        </Router>
      </ThemeProvider>
    );
  }
}

export default connect()(App);
