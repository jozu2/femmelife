export const putActivityStats = (activities) => {
  return {
    type: 'PUT_ACTIVITY_STATS',
    payload: activities,
  };
};

export const updateActivities = (id) => {
  return {
    type: 'UPDATE_ACTIVITIES',
    payload: { id },
  };
};
