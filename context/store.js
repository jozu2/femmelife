// store.js
import { createStore, combineReducers } from "redux";
import waterTrackerReducer from "./reducers/waterTrackerReducer";
import navReducer from "./navSlice";

const rootReducer = combineReducers({
  waterTracker: waterTrackerReducer,
  reducer: {
    nav: navReducer,
  },
});

const store = createStore(rootReducer);

export default store;
