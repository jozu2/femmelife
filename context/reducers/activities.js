const initialState = {
  stats: {
    finish: 0,
    caloriesBurned: 0,
    spent: 0,
  },
  activities: {
    stretching: {
      id: 1,
      finish: 0,
    },
    walking: {
      id: 2,
      finish: 0,
    },
    yoga: {
      id: 3,
      finish: 0,
    },
    meditation: {
      id: 5,
      finish: 0,
    },
    jogging: {
      id: 6,
      finish: 0,
    },
    dancing: {
      id: 7,
      finish: 0,
    },
    cleaning: {
      id: 8,
      finish: 0,
    },
    reading: {
      id: 9,
      finish: 0,
    },
  },
};

const activityReducer = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case "PUT_ACTIVITY_STATS":
      return {
        ...state,
        stats: action.payload,
      };
    case "UPDATE_ACTIVITIES":
      const { id } = action.payload;
      const activityToUpdateKey = Object.keys(state.activities).find(
        (key) => state.activities[key].id === id
      );

      if (activityToUpdateKey) {
        const updatedActivities = {
          ...state.activities,
          [activityToUpdateKey]: {
            ...state.activities[activityToUpdateKey],
            finish: state.activities[activityToUpdateKey].finish + 1,
          },
        };

        return {
          ...state,
          activities: updatedActivities,
        };
      } else {
        // Handle the case where the activity with the specified id is not found
        return state;
      }

    default:
      return state;
  }
};

export default activityReducer;
