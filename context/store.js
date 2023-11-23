// store.js
import { createStore, combineReducers } from 'redux';
import waterTrackerReducer from './reducers/waterTrackerReducer';

const rootReducer = combineReducers({
  waterTracker: waterTrackerReducer,
});

const store = createStore(rootReducer);

export default store;
