import { getProfile, getStatus, updateStatus } from "../rest-client";

const SWITCH_IS_LOADING = "SWITCH_IS_LOADING";
const CREATE_NEW_POST = "CREATE_NEW_POST";
const SET_PROFILE = "SET_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";

let initialState = {
  profile: {
    aboutMe: "",
    contacts: {
      facebook: "",
      website: "",
      vk: "",
      twitter: "",
      instagram: "",
      youtube: "",
      github: "",
      mainLink: "",
    },
    lookingForAJob: false,
    lookingForAJobDescription: "",
    fullName: "",
    userId: 0,
    photos: {
      small: "",
      large: "",
    },
  },
  posts: [
    {
      id: 0,
      msg: "Hi! I'm ninja warior!",
      likes: 1,
    },
    {
      id: 1,
      msg: "I'm here for revenge",
      likes: 2,
    },
  ],
  status: "",
  userId: null,
  isLoading: false,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NEW_POST:
      let newPost = { id: 2, msg: action.postText, likes: 0 };
      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.postId),
      };
    case SET_PROFILE:
      return {
        ...state,
        profile: action.profile,
        userId: Number(action.userId),
      };
    case SWITCH_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    default:
      return state;
  }
};

export const DEFAULT_STATUS = "set status";
export const createNewPost = (postText) => ({
  type: CREATE_NEW_POST,
  postText,
});
export const deletePost = (postId) => ({
  type: DELETE_POST,
  postId,
});
export const switchIsLoading = (isLoading) => ({
  type: SWITCH_IS_LOADING,
  isLoading,
});
export const setProfile = (profile, userId) => ({
  type: SET_PROFILE,
  profile,
  userId,
});

export const getProfileThunk = (userId) => {
  return (dispatch) => {
    dispatch(switchIsLoading(true));
    getProfile(userId).then((response) => {
      dispatch(switchIsLoading(false));
      dispatch(setProfile(response.data, userId));
    });
  };
};
export const setStatus = (status) => ({ type: SET_STATUS, status });

export const getStatusThunk = (userId) => {
  return (dispatch) => {
    dispatch(switchIsLoading(true));
    getStatus(userId).then((response) => {
      dispatch(switchIsLoading(false));
      dispatch(setStatus(response.data ? response.data : DEFAULT_STATUS));
    });
  };
};

export const updateStatusThunk = (status) => {
  return (dispatch) => {
    dispatch(switchIsLoading(true));
    updateStatus(status).then((response) => {
      dispatch(switchIsLoading(false));
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
  };
};

export default profileReducer;
