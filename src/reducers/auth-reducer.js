import { authorise } from "../rest-client";

const SET_CREDENTIALS = "SET_CREDENTIALS";

let initialState = {
  id: null,
  login: "",
  email: "",
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CREDENTIALS:
      return {
        ...state,
        ...action.credentials,
      };
    default:
      return state;
  }
};

export const setCredentials = (credentials) => ({
  type: SET_CREDENTIALS,
  credentials,
});

export const authoriseThunk = () => {
  return (dispatch) => {
    authorise().then((response) => {
      let responseData = response.data;
      if (responseData.resultCode === 0) {
        dispatch(
          setCredentials({
            ...responseData.data,
            isAuthenticated: true,
          })
        );
      }
    });
  };
};

export default authReducer;
