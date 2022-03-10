import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  permissionsList: [],
  user: {},
  users: [],
  totalCount: 0,
};

const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    setPermissions: (state, { payload }) => {
      state.permissionsList = payload;
    },
    setUser: (state, { payload }) => {
      state.user = payload;
    },
    setUsers: (state, { payload }) => {
      state.users = payload;
    },
    setTotalCount: (state, { payload }) => {
      state.totalCount = payload;
    },
    removeUser: (state, { payload }) => {
      state.users = state.users.filter((user) => user._id !== payload);
    },
    resetUsers: (state) => {
      state.permissionsList = [];
      state.user = {};
      state.users = [];
    },
  },
});

export const {
  setPermissions,
  setUser,
  setUsers,
  setTotalCount,
  removeUser,
  resetUsers,
} = messagesSlice.actions;

export default messagesSlice.reducer;
