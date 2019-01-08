// Libraries
import React from 'react';
import { connect } from 'react-redux';

// Components
import Post from './post';
import Button from '../button';

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
          <Button type='submit' value='Get posts' />
        </form>
        <div>
          {this.props.errored && <p>Could not retrieve posts at this time. Please try again later</p>}
          {this.props.fetching && <p>Loading data...</p>}
          {!this.props.fetching && this.props.posts.map((post) => {
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
  posts: state.postsState.posts || [],
  fetching: state.postsState.fetching,
  errored: state.postsState.errored
});

const mapDispatchToProps = dispatch => {
  return {
    getPosts: () => dispatch({ type: GET_POSTS })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewPostsContainer);