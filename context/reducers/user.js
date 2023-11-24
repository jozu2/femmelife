// reducers/userReducer.js
const initialState = {
  userDetails: {
    name: "",
    age: null,
    sleep: null,
    up: null,
    symptoms: null,
    lPeriod: null,
    diabetes: null,
    bmi: null,
    pcos: null,
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PUT_USER_NAME":
      return {
        ...state,
        userDetails: { ...state.userDetails, name: action.payload.name },
      };
    case "PUT_USER_AGE":
      return {
        ...state,
        userDetails: { ...state.userDetails, age: action.payload.age },
      };
    case "PUT_USER_SLEEP":
      return {
        ...state,
        userDetails: { ...state.userDetails, sleep: action.payload.sleep },
      };
    case "PUT_USER_GET_UP":
      return {
        ...state,
        userDetails: { ...state.userDetails, up: action.payload.up },
      };
    case "PUT_USER_SYMPTOMS":
      return {
        ...state,
        userDetails: {
          ...state.userDetails,
          symptoms: action.payload.symptoms,
        },
      };
    case "PUT_USER_LAST_PERIOD":
      return {
        ...state,
        userDetails: { ...state.userDetails, lPeriod: action.payload.lPeriod },
      };
    case "PUT_USER_LAST_PERIOD":
      return {
        ...state,
        userDetails: { ...state.userDetails, lPeriod: action.payload.lPeriod },
      };
    case "PUT_USER_DIABETES":
      return {
        ...state,
        userDetails: {
          ...state.userDetails,
          diabetes: action.payload.diabetes,
        },
      };
    case "PUT_USER_BMI":
      return {
        ...state,
        userDetails: { ...state.userDetails, bmi: action.payload.bmi },
      };
    case "PUT_USER_PCOS":
      return {
        ...state,
        userDetails: { ...state.userDetails, pcos: action.payload.pcos },
      };
    default:
      return state;
  }
};

export default userReducer;
