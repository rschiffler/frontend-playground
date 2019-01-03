// Libraries
import React from 'react';
import { connect } from 'react-redux';

// Components
import Post from './post';

// Redux
import { GET_POSTS } from './postsActions';

class ViewPostsContainer extends React.PureComponent {
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.getPosts();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>View Posts</h1>
          <fieldset>
            <p>
              <input type='submit' value='Get posts' />
            </p>
          </fieldset>
        </form>
        <div>
          {this.props.posts.map((post) => {
            return (
              <Post {...post} />
            )
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.postsState.posts || []
});

const mapDispatchToProps = dispatch => {
  return {
    getPosts: () => dispatch({ type: GET_POSTS })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewPostsContainer);