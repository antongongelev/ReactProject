const UPDATE_NEW_POST_MESSAGE = "UPDATE_NEW_POST_MESSAGE";
const CREATE_NEW_POST = "CREATE_NEW_POST";

let initialState = {
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

const postsReducer = (state = initialState, action) => {
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
    default:
      return state;
  }
};

export const createNewPostCreator = () => ({ type: CREATE_NEW_POST });
export const updateNewPostMessageCreator = body => ({
  type: UPDATE_NEW_POST_MESSAGE,
  body: body
});

export default postsReducer;
