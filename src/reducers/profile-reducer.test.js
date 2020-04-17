import profileReducer, { createNewPost, deletePost } from "./profile-reducer";

let state = {
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

it("after adding new post the lenght of posts should be incremented", () => {
  let action = createNewPost("test post");
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(3);
});

it("after adding new post the post text should be correct", () => {
  let action = createNewPost("test post");
  let newState = profileReducer(state, action);
  expect(newState.posts[2].msg).toBe("test post");
});

it("after deletion of post the posts lenght should be decremented", () => {
  let action = deletePost(1);
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(1);
});

it("after deletion of post with wrong id posts length should remain the same", () => {
  let action = deletePost(99999);
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(2);
});
