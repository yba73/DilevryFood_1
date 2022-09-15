import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// get checkout list/
export const getcheckout = createAsyncThunk(
  "get/checkoutList",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.get("/api/v1/checkout");
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
// Add products/
export const addCheckout = createAsyncThunk(
  "checkout/addcheckout",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const res = await axios.post("/api/v1/checkout/addcheckout", data, {
        headers: { token: localStorage.getItem("token") },
      });
      return dispatch(getcheckout());
    } catch (error) {
      return rejectWithValue(
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message
      );
    }
  }
);

// Delet checkout/
export const deleteCheckout = createAsyncThunk(
  "checkout/deleteCheckout",
  async (checkoutID, { rejectWithValue, dispatch }) => {
    try {
      await axios.delete(`/api/v1/checkout/${checkoutID}`, {
        headers: { token: localStorage.getItem("token") },
      });
      return dispatch(getcheckout());
    } catch (error) {
      return rejectWithValue(
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message
      );
    }
  }
);

//state checkout
export const checkoutSlice = createSlice({
  name: "checkout",
  initialState: {
    checkoutState: "",
    CheckoutList: [],
    errors: null,
    loading: false,
  },
  reducers: {
    selectcheckout: (state, action) => {
      state.categoryState = action.payload;
    },
  },
  extraReducers: {
    [getcheckout.pending]: (state) => {
      state.loading = true;
    },
    [getcheckout.fulfilled]: (state, action) => {
      state.loading = false;
      state.CheckoutList = action.payload;
      state.errors = null;
    },
    [getcheckout.rejected]: (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    },
  },
});

export default checkoutSlice.reducer;
export const { selectcheckout } = checkoutSlice.actions;
