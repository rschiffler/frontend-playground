import { GET_POSTS_FETCHING, GET_POSTS_ERRORED, RECEIVED_POSTS } from './postsActions';

const initialState = {
  posts: [],
  fetching: false,
  errored: false
}

export default function postsState(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS_FETCHING:
      return { ...state, fetching: true, errored: false };
    case GET_POSTS_ERRORED:
      return { ...state, fetching: false, errored: true };
    case RECEIVED_POSTS:
      return { ...state, posts: [...action.posts], fetching: false, errored: false };
    default:
      return state
  }
}