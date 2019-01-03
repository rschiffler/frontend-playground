
export const GET_POSTS = 'GET_POSTS';
export const RECEIVED_POSTS = 'RECEIVED_POSTS';
export function receivedPosts(posts) {
  return {
    type: RECEIVED_POSTS,
    payload: posts
  }
}