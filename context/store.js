// store.js
import { combineReducers, createStore } from 'redux';
import waterTrackerReducer from './reducers/waterTrackerReducer';
import userReducer from './reducers/user';
import activityReducer from './reducers/activities';

const rootReducer = combineReducers({
  waterTracker: waterTrackerReducer,
  user: userReducer,
  activity: activityReducer,
});

const store = createStore(rootReducer);

export default store;
