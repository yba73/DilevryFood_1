import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategories = createAsyncThunk(
  "category/getCategories",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.get("/api/v1/category");
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

const categorySlice = createSlice({
  name: "category",
  initialState: {
    categoryState: "",
    categoryList: [],
    errors: null,
    loading: false,
  },
  reducers: {
    selectCategory: (state, action) => {
      state.categoryState = action.payload;
    },
  },
  extraReducers: {
    [getCategories.pending]: (state) => {
      state.loading = true;
    },
    [getCategories.fulfilled]: (state, action) => {
      state.loading = false;
      state.categoryList = action.payload;
      state.errors = null;
    },
    [getCategories.rejected]: (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    },
  },
});

export default categorySlice.reducer;
export const { selectCategory } = categorySlice.actions;
