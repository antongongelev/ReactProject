const SWITCH_FOLLOW = "SWITCH_FOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const SWITCH_IS_LOADING = "SWITCH_IS_LOADING";

let initialState = {
  users: [],
  currentPage: 1,
  pageSize: 5,
  totalUsersCount: 0,
  isLoading: false
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
        users: action.users
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.page
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.usersCount
      };
    case SWITCH_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      };
    default:
      return state;
  }
};

export const switchFollow = userId => ({ type: SWITCH_FOLLOW, userId });
export const switchIsLoading = isLoading => ({
  type: SWITCH_IS_LOADING,
  isLoading
});
export const setUsers = users => ({ type: SET_USERS, users });
export const setCurrentPage = page => ({ type: SET_CURRENT_PAGE, page });
export const setTotalUsersCount = usersCount => ({
  type: SET_TOTAL_USERS_COUNT,
  usersCount
});

export default usersReducer;
