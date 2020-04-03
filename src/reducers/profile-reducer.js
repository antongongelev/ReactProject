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
      mainLink: ""
    },
    lookingForAJob: false,
    lookingForAJobDescription: "",
    fullName: "",
    userId: 0,
    photos: {
      small: "",
      large: ""
    }
  },
  posts: [
    {
      id: 0,
      msg: "Hi! I'm ninja warior!",
      likes: 1
    },
    {
      id: 1,
      msg: "I'm here for revenge",
      likes: 2
    }
  ],
  newPostMessage: ""
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
        posts: [...state.posts, newPost]
      };
    case SET_PROFILE:
      return {
        ...state,
        profile: action.profile
      };
    default:
      return state;
  }
};

export const createNewPost = () => ({ type: CREATE_NEW_POST });
export const updateNewPostMessage = body => ({
  type: UPDATE_NEW_POST_MESSAGE,
  body: body
});
export const setProfile = profile => ({ type: SET_PROFILE, profile });

export default profileReducer;
