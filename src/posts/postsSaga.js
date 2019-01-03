import { call, put } from 'redux-saga/effects';
import callFetch from '../redux/fetch';

import { RECEIVED_POSTS } from './postsActions';

export default function* getPosts() {
  try {
    const posts = yield call(callFetch, 'https://jsonplaceholder.typicode.com/posts');
    yield put({ type: RECEIVED_POSTS, posts });
  }
  catch(error) {
    yield put({ type: 'PRODUCTS_REQUEST_FAILED', error })
  }
}