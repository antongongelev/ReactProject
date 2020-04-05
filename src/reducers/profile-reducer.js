import { getProfile } from "../rest-client";

const SWITCH_IS_LOADING = "SWITCH_IS_LOADING";
const UPDATE_NEW_POST_MESSAGE = "UPDATE_NEW_POST_MESSAGE";
const CREATE_NEW_POST = "CREATE_NEW_POST";
const SET_PROFILE = "SET_PROFILE";

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
  newPostMessage: "",
  isLoading: false,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_POST_MESSAGE:
      return { ...state, newPostMessage: action.body };
    case CREATE_NEW_POST:
      let newPost = { id: 2, msg: state.newPostMessage, likes: 0 };
      return {
        ...state,
        newPostMessage: "",
        posts: [...state.posts, newPost],
      };
    case SET_PROFILE:
      return {
        ...state,
        profile: action.profile,
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

export const createNewPost = () => ({ type: CREATE_NEW_POST });
export const updateNewPostMessage = (body) => ({
  type: UPDATE_NEW_POST_MESSAGE,
  body: body,
});
export const switchIsLoading = (isLoading) => ({
  type: SWITCH_IS_LOADING,
  isLoading,
});
export const setProfile = (profile) => ({ type: SET_PROFILE, profile });
export const getProfileThunk = (userId) => {
  return (dispatch) => {
    dispatch(switchIsLoading(true));
    getProfile(userId).then((response) => {
      dispatch(switchIsLoading(false));
      dispatch(setProfile(response.data));
    });
  };
};

export default profileReducer;
