// waterTrackerReducer.js
import { UPDATE_WATER_INTAKE } from "../actions/waterTrackerActions";

const initialState = {
  waterIntake: 0,
};

const waterTrackerReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_WATER_INTAKE:
      return {
        ...state,
        waterIntake: action.payload,
      };
    default:
      return state;
  }
};

export default waterTrackerReducer;
