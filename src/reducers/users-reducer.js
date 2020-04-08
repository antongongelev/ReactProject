import { getUsers, followUser, unfollowUser } from "../rest-client";

const SWITCH_FOLLOW = "SWITCH_FOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const SWITCH_IS_LOADING = "SWITCH_IS_LOADING";
const SET_FOLLOWING_IN_PROGRESS = "SET_FOLLOWING_IN_PROGRESS";

let initialState = {
  users: [],
  currentPage: 1,
  pageSize: 5,
  totalUsersCount: 0,
  isLoading: false,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: !user.followed };
          }
          return user;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.page,
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.usersCount,
      };
    case SWITCH_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case SET_FOLLOWING_IN_PROGRESS:
      return {
        ...state,
        followingInProgress: action.followingInProgress
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((uid) => uid !== action.userId),
      };
    default:
      return state;
  }
};

export const switchFollow = (userId) => ({ type: SWITCH_FOLLOW, userId });
export const switchIsLoading = (isLoading) => ({
  type: SWITCH_IS_LOADING,
  isLoading,
});
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, page });
export const setTotalUsersCount = (usersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  usersCount,
});
export const setFollowingInProgress = (followingInProgress, userId) => ({
  type: SET_FOLLOWING_IN_PROGRESS,
  followingInProgress,
  userId,
});
export const getUsersThunk = (page, pageSize) => {
  return (dispatch) => {
    dispatch(switchIsLoading(true));
    getUsers(page, pageSize).then((response) => {
      dispatch(switchIsLoading(false));
      dispatch(setCurrentPage(page));
      dispatch(setTotalUsersCount(response.data.totalCount));
      dispatch(setUsers(response.data.items));
    });
  };
};
export const switchFollowThunk = (userId, isFollowed) => {
  return (dispatch) => {
    dispatch(setFollowingInProgress(true, userId));
    isFollowed
      ? unfollowUser(userId).then((response) => {
          dispatch(setFollowingInProgress(false, userId));
          if (response.data.resultCode === 0) {
            dispatch(switchFollow(userId));
          }
        })
      : followUser(userId).then((response) => {
          dispatch(setFollowingInProgress(false, userId));
          if (response.data.resultCode === 0) {
            dispatch(switchFollow(userId));
          }
        });
  };
};

export default usersReducer;
