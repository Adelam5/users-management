import axios from "axios";
import store from "../redux/store";
import { setError } from "../redux/slices/messagesSlice";
import { setPermissions } from "../redux/slices/usersSlice";

export const getPermissions = () => {
  axios
    .get("http://localhost:5000/api/permissions")
    .then((res) => {
      if (res.data) store.dispatch(setPermissions(res.data));
    })
    .catch((err) => {
      store.dispatch(setError(err?.response?.data?.error || err.message));
    });
};
