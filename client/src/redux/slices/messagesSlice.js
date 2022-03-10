import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  success: "",
  error: "",
};

const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    setSuccess: (state, { payload }) => {
      state.success = payload;
      state.error = "";
    },
    setError: (state, { payload }) => {
      state.error = payload;
      state.success = "";
    },
    resetMessages: (state) => {
      state.success = "";
      state.error = "";
    },
  },
});

export const { setSuccess, setError, resetMessages } = messagesSlice.actions;

export default messagesSlice.reducer;
