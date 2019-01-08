
export const GET_POSTS = 'GET_POSTS';
export const GET_POSTS_FETCHING = 'GET_POSTS_FETCHING';
export const GET_POSTS_ERRORED = 'GET_POSTS_ERRORED';
export const RECEIVED_POSTS = 'RECEIVED_POSTS';

export function receivedPosts(posts) {
  return {
    type: RECEIVED_POSTS,
    payload: posts
  }
}

export function getPostsFetching() {
  return {
    type: GET_POSTS_FETCHING
  }
}

export function getPostsErrored() {
  return {
    type: GET_POSTS_ERRORED
  }
}