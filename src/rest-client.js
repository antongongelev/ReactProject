import * as axios from "axios";

let instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "527c6363-0788-4fcf-849d-30cea3cb1b22",
  },
});

export const authorise = () => {
  return instance.get("auth/me");
};

export const getUsers = (page, count) => {
  return instance.get(`users?page=${page}&count=${count}`);
};

export const getProfile = (userId) => {
  return instance.get(`profile/${userId}`);
};

export const followUser = (userId) => {
  return instance.post(`follow/${userId}`);
};

export const unfollowUser = (userId) => {
  return instance.delete(`follow/${userId}`);
};

export const getStatus = (userId) => {
  return instance.get(`profile/status/${userId}`);
};

export const updateStatus = (status) => {
  return instance.put("profile/status", { status });
};
