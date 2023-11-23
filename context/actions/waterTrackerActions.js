// waterTrackerActions.js
export const UPDATE_WATER_INTAKE = 'UPDATE_WATER_INTAKE';

export const updateWaterIntake = (amount) => ({
  type: UPDATE_WATER_INTAKE,
  payload: amount,
});
