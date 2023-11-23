// actions/userActions.js
export const putUserName = (name) => {
    return {
      type: 'PUT_USER_NAME',
      payload: { name },
    };
  };
  
  export const putUserAge = (age) => {
    return {
      type: 'PUT_USER_AGE',
      payload: { age },
    };
  };
  
  export const putUserSleep = (sleep) => {
    return {
      type: 'PUT_USER_SLEEP',
      payload: { sleep },
    };
  };

  export const putUserGetUp = (up) => {
    return {
      type: 'PUT_USER_GET_UP',
      payload: { up },
    };
  };