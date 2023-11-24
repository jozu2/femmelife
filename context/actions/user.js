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

  export const putUserSymptoms = (symptoms) => {
    return {
      type: 'PUT_USER_SYMPTOMS',
      payload: { symptoms },
    };
  };

  export const putUserLastPeriod = (lPeriod) => {
    return {
      type: 'PUT_USER_LAST_PERIOD',
      payload: { lPeriod },
    };
  };

  export const putUserDiabetes = (diabetes) => {
    return {
      type: 'PUT_USER_DIABETES',
      payload: { diabetes },
    };
  };

  export const putUserBmi = (bmi) => {
    return {
      type: 'PUT_USER_BMI',
      payload: { bmi },
    };
  };

  export const putUserSignOfPcos = (pcos) => {
    return {
      type: 'PUT_USER_PCOS',
      payload: { pcos },
    };
  };
