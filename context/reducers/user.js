// reducers/userReducer.js
const initialState = {
    userDetails: { name: '', age: null, sleep: null, up: null },
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'PUT_USER_NAME':
        return {
          ...state,
          userDetails: { ...state.userDetails, name: action.payload.name },
        };
      case 'PUT_USER_AGE':
        return {
          ...state,
          userDetails: { ...state.userDetails, age: action.payload.age },
        };
      case 'PUT_USER_SLEEP':
        return {
            ...state,
            userDetails: { ...state.userDetails, sleep: action.payload.sleep },
        };
      case 'PUT_USER_GET_UP':
        return {
            ...state,
            userDetails: { ...state.userDetails, up: action.payload.up },
        };    
      default:
        return state;
    }
  };
  
  export default userReducer;
  