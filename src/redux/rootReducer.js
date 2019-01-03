import { combineReducers } from 'redux';

import postsReducer from '../posts/postsReducer';

const rootReducer = combineReducers({
  postsState: postsReducer
})

export default rootReducer;