import axios from "axios";
import store from "../redux/store";
import {
  removeUser,
  setUser,
  setUsers,
  setTotalCount,
} from "../redux/slices/usersSlice";
import { setError, setSuccess } from "../redux/slices/messagesSlice";
import { hideModal } from "../redux/slices/modalSlice";

const baseURL = "http://localhost:5000/api/users";

export const getUsers = (
  matchAttr = "",
  matchValue = "",
  orderAttr = "",
  desc = "",
  skip = "0"
) => {
  axios
    .get(
      `${baseURL}?matchAttr=${matchAttr}&matchValue=${matchValue}&orderAttr=${orderAttr}&desc=${desc}&skip=${skip}`
    )
    .then((res) => {
      if (res.data) {
        store.dispatch(setUsers(res?.data[0]?.users));
        store.dispatch(setTotalCount(res?.data[0]?.totalCount[0]?.count) || 0);
      }
    })
    .catch((err) => {
      store.dispatch(setError(err?.response?.data?.error || err.message));
    });
};

export const getUserById = (id) => {
  axios
    .get(`${baseURL}/${id}`)
    .then((res) => {
      if (res.data) store.dispatch(setUser(res.data));
    })
    .catch((err) => {
      store.dispatch(
        setError(
          err?.response?.data?.error || err?.response?.statusText || err.message
        )
      );
    });
};

export const createUser = (userData) => {
  axios
    .post(baseURL, userData)
    .then((res) => {
      if (res.status === 200) {
        store.dispatch(setSuccess(res.data.message));
        window.history.back();
      }
    })
    .catch((err) => {
      store.dispatch(
        setError(
          err?.response?.data?.error || err?.response?.statusText || err.message
        )
      );
    });
};

export const editUser = (id, userData) => {
  axios
    .put(`${baseURL}/${id}`, userData)
    .then((res) => {
      if (res.status === 200) {
        store.dispatch(setSuccess(res.data.message));
        window.history.back();
      }
    })
    .catch((err) => {
      store.dispatch(
        setError(
          err?.response?.data?.error || err?.response?.statusText || err.message
        )
      );
    });
};

export const updatePermissions = (id, userData) => {
  axios
    .patch(`${baseURL}/${id}`, { user: userData })
    .then((res) => {
      if (res.status === 200) {
        store.dispatch(setSuccess(res.data.message));
        window.history.back();
      }
    })
    .catch((err) => {
      store.dispatch(
        setError(
          err?.response?.data?.error || err?.response?.statusText || err.message
        )
      );
    });
};

export const deleteUser = (id) => {
  axios
    .delete(`${baseURL}/${id}`)
    .then((res) => {
      store.dispatch(setSuccess("Account deleted successfully."));
      store.dispatch(hideModal());
      store.dispatch(removeUser(id));
    })
    .catch((err) => {
      store.dispatch(setError(err?.response?.data?.error || err.message));
    });
};
