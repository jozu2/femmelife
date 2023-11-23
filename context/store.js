// store.js
import { combineReducers, createStore } from 'redux';
import waterTrackerReducer from './reducers/waterTrackerReducer';
import userReducer from './reducers/user';

const rootReducer = combineReducers({
  waterTracker: waterTrackerReducer,
  user: userReducer 
});

const store = createStore(rootReducer);

export default store;
