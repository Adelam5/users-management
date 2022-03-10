import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./slices/usersSlice";
import messagesSlice from "./slices/messagesSlice";
import modalSlice from "./slices/modalSlice";
import searchSlice from "./slices/searchSlice";

export default configureStore({
  reducer: {
    users: usersSlice,
    messages: messagesSlice,
    modal: modalSlice,
    search: searchSlice,
  },
});
