import { authorise, login, logout } from "../rest-client";
import { stopSubmit } from "redux-form";

const SET_CREDENTIALS = "SET_CREDENTIALS";
const SWITCH_IS_LOADING = "SWITCH_IS_LOADING";
const LOGOUT = "LOGOUT";

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
    case LOGOUT: {
      return {
        ...initialState,
      };
    }
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

export const logoutSocialNetwork = () => ({ type: LOGOUT });

export const authoriseThunk = () => {
  return (dispatch) => {
    return authorise().then((response) => {
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
        dispatch(authoriseThunk());
      } else {
        let errorMessage =
          response.data.messages.length > 0
            ? response.data.messages[0]
            : "Server error";
        dispatch(stopSubmit("login", { _error: errorMessage }));
      }
      dispatch(switchIsLoading(false));
    });
  };
};

export const logoutThunk = () => {
  return (dispatch) => {
    dispatch(switchIsLoading(true));
    logout().then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(logoutSocialNetwork());
      }
    });
  };
};

export default authReducer;
