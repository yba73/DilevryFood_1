import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// registerUser
export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (dataInfo, { rejectWithValue }) => {
    try {
      const res = await axios.post("api/v1/users/register", dataInfo);
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message
      );
    }
  }
);
//getsuerinfo
export const getUserInfo = createAsyncThunk(
  "users/getUserInfo",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.get("/api/v1/users/infouser", {
        headers: { token: localStorage.getItem("token") },
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message
      );
    }
  }
);

//getAllUserInfo
export const getAllUserInfo = createAsyncThunk(
  "user/getUserInfo",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.get("/api/v1/users", {
        // headers: { token: localStorage.getItem("token") },
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message
      );
    }
  }
);
// post loginUser
export const loginUser = createAsyncThunk(
  "users/loginUser",
  async (info, { rejectWithValue }) => {
    try {
      const res = await axios.post("/api/v1/users/login", info);
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message
      );
    }
  }
);

// upadate user
export const updateProfileAction = createAsyncThunk(
  "users/updateUsers",
  async (userInfo, { rejectWithValue, dispatch }) => {
    try {
      const res = await axios.put(`/api/v1/users/${userInfo.id}`, userInfo);
      return dispatch(getUserInfo());
    } catch (error) {}
  }
);
// Delete user
export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async (ID, { rejectWithValue, dispatch }) => {
    try {
      await axios.delete(`/api/v1/users/${ID}`, {
        headers: { token: localStorage.getItem("token") },
      });
      return dispatch(getAllUserInfo());
    } catch (error) {
      console.log(error.response.data.msg);
      return rejectWithValue(
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message
      );
    }
  }
);

// State
const userSlice = createSlice({
  name: "user",
  initialState: {
    UserState: "",
    userInfo: {},
    AllUserInfo: [],
    token: localStorage.getItem("token") || null,
    isAuth: Boolean(localStorage.getItem("isAuth")) || false,

    errors: null,
  },
  // reducer logout
  reducers: {
    logout: (state) => {
      localStorage.clear();
      state.token = null;
      state.isAuth = false;

      state.userInfo = {};
      state.AllUserInfo = [];
    },
  },
  // reducer : registerUser fulfilled
  extraReducers: {
    [registerUser.fulfilled]: (state, action) => {
      state.token = action.payload.token;
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("isAuth", true);
      state.isAuth = true;

      state.errors = null;
    },
    // reducer : registerUser rejected

    [registerUser.rejected]: (state, action) => {
      state.errors = action.payload;
    },

    // reducer : loginUser fulfilled

    [loginUser.fulfilled]: (state, action) => {
      state.token = action.payload.token;
      localStorage.setItem("token", action.payload.token);

      localStorage.setItem("isAuth", true);
      state.isAuth = true;
      state.errors = null;
    },

    // reducer : loginUser rejected
    [loginUser.rejected]: (state, action) => {
      state.errors = action.payload;
    },

    //reducer : getUserInfo
    [getUserInfo.fulfilled]: (state, action) => {
      state.userInfo = action.payload;
    },
    //reducer : getAllUserInfo
    [getAllUserInfo.fulfilled]: (state, action) => {
      state.AllUserInfo = action.payload;
    },
  },
});
export default userSlice.reducer;
export const { logout } = userSlice.actions;
