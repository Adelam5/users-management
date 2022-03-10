import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  matchAttr: "",
  matchValue: "",
  orderAttr: "created",
  desc: false,
  skip: 0,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setMatchAttr: (state, { payload }) => {
      state.matchAttr = payload;
    },
    setMatchValue: (state, { payload }) => {
      state.matchValue = payload;
    },
    setOrderAttr: (state, { payload }) => {
      state.orderAttr = payload;
    },
    setOrderValue: (state, { payload }) => {
      state.desc = payload;
    },
    setSkip: (state, { payload }) => {
      state.skip = payload;
    },
  },
});

export const {
  setMatchAttr,
  setMatchValue,
  setOrderAttr,
  setOrderValue,
  setSkip,
} = searchSlice.actions;

export default searchSlice.reducer;
