const SWITCH_FOLLOW = "SWITCH_FOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    {
      id: 0,
      firstName: "Anton",
      lastName: "Gongelev",
      age: 26,
      sex: "male",
      city: "Opochka",
      country: "Russia",
      followed: false
    },
    {
      id: 1,
      firstName: "Sobaka",
      lastName: "Barabaka",
      age: 6,
      sex: "female",
      city: "Kiev",
      country: "Ukraine",
      followed: true
    }
  ]
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: !user.followed };
          }
          return user;
        })
      };
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, action.users]
      };
    default:
      return state;
  }
};

export const switchFollowAC = userId => ({ type: SWITCH_FOLLOW, userId });
export const setUsersAC = users => ({ type: SET_USERS, users });

export default usersReducer;
