import { call, put } from 'redux-saga/effects';
import callFetch from '../redux/fetch';

import { RECEIVED_POSTS, GET_POSTS_FETCHING, GET_POSTS_ERRORED } from './postsActions';

export default function* getPosts() {
  yield put({ type: GET_POSTS_FETCHING });
  try {
    const posts = yield call(callFetch, 'https://jsonplaceholder.typicode.com/posts');
    yield put({ type: RECEIVED_POSTS, posts });
  }
  catch(error) {
    yield put({ type: GET_POSTS_ERRORED })
  }
}