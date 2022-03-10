import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
  user: {},
  to: "/",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (state, { payload }) => {
      state.show = true;
      state.user = payload;
    },
    hideModal: (state) => {
      state.show = false;
      state.user = {};
    },
    redirectTo: (state, { payload }) => {
      state.to = payload;
    },
  },
});

export const { showModal, hideModal, redirectTo } = modalSlice.actions;

export default modalSlice.reducer;
