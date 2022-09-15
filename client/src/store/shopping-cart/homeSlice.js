import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getHome = createAsyncThunk(
  "Home/getHome",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.get("/api/v1/homes");
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

const homeSlice = createSlice({
  name: "home",
  initialState: {
    HomeState: "",
    HomeList: [],
    errors: null,
    loading: false,
  },

  extraReducers: {
    [getHome.pending]: (state) => {
      state.loading = true;
    },
    [getHome.fulfilled]: (state, action) => {
      state.loading = false;
      state.HomeList = action.payload;
      state.errors = null;
    },
    [getHome.rejected]: (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    },
  },
});

export default homeSlice.reducer;
export const { selectHome } = homeSlice.actions;
