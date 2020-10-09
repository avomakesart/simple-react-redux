import { combineReducers } from 'redux';
import postReducer from './postReducer';
import userReducer from './userReducer';

// Reducers
export default combineReducers({
  posts: postReducer,
  users: userReducer,
});
