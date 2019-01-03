import { RECEIVED_POSTS } from './postsActions';

const initialState = {
  posts: []
}

export default function postsState(state = initialState, action) {
  switch (action.type) {
    case RECEIVED_POSTS:
      return { ...state, posts: [...action.posts] };
    default:
      return state
  }
}