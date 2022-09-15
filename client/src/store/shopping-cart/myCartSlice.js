import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
/// get card
export const getCart = createAsyncThunk(
  "cart/getCart",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.get("/api/v1/cart", {
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

/// add card
export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      await axios.put("/api/v1/cart/addtocart", data, {
        headers: { token: localStorage.getItem("token") },
      });
      return dispatch(getCart());
    } catch (error) {
      return rejectWithValue(
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message
      );
    }
  }
);

// deletecards
export const deleteCart = createAsyncThunk(
  "cart/deletecards",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      await axios.put("/api/v1/cart/deleteCart", data, {
        headers: { token: localStorage.getItem("token") },
      });
      return dispatch(getCart());
    } catch (error) {
      return rejectWithValue(
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message
      );
    }
  }
);

// removeCart
export const removeCart = createAsyncThunk(
  "cart/removeCart",
  async (productId, { rejectWithValue, dispatch }) => {
    try {
      await axios.put("/api/v1/cart/removefromcart", productId, {
        headers: { token: localStorage.getItem("token") },
      });
      return dispatch(getCart());
    } catch (error) {
      return rejectWithValue(
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message
      );
    }
  }
);

const myCartSlice = createSlice({
  name: "myCart",
  initialState: {
    cartItems: [],
    totalQuantity: 0,
    totalAmount: 0,
    errors: null,
  },
  extraReducers: {
    [getCart.fulfilled]: (state, action) => {
      state.cartItems = action.payload;
      state.errors = null;
    },
    [getCart.rejected]: (state, action) => {
      state.errors = action.payload;
    },
  },
});

export default myCartSlice.reducer;
