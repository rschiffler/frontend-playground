// Libraries
import { takeLatest } from 'redux-saga/effects';

// Sagas
import getPosts from '../posts/postsSaga';
import { GET_POSTS } from '../posts/postsActions';

export default function* rootSaga() {
  yield takeLatest(GET_POSTS, getPosts)
}