import { authorise, login } from "../rest-client";

const SET_CREDENTIALS = "SET_CREDENTIALS";
const SWITCH_IS_LOADING = "SWITCH_IS_LOADING";

let initialState = {
  id: null,
  login: "",
  email: "",
  isAuthenticated: false,
  isLoading: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CREDENTIALS:
      return {
        ...state,
        ...action.credentials,
      };
    case SWITCH_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    default:
      return state;
  }
};

export const setCredentials = (credentials) => ({
  type: SET_CREDENTIALS,
  credentials,
});

export const switchIsLoading = (isLoading) => ({
  type: SWITCH_IS_LOADING,
  isLoading,
});

export const authoriseThunk = () => {
  debugger;
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

export const loginThunk = (loginData) => {
  return (dispatch) => {
    dispatch(switchIsLoading(true));
    login(loginData).then((response) => {
      if (response.data.resultCode === 0) {
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
      }
      dispatch(switchIsLoading(false));
    });
  };
};

export default authReducer;
