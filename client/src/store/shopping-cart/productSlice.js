import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// get products products/
export const getProducts = createAsyncThunk(
  "foods",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.get("/api/v1/products");
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
export const addProduct = createAsyncThunk(
  "products/addproduct",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const form = new FormData();
      form.append("id", data.id);
      form.append("title", data.title);
      form.append("price", data.price);
      form.append("image01", data.file);
      form.append("category", data.category);
      form.append("desc", data.desc);
      const res = await axios.post("/api/v1/products/addproducts", form, {
        headers: { token: localStorage.getItem("token") },
      });
      return dispatch(getProducts());
    } catch (error) {
      return rejectWithValue(
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message
      );
    }
  }
);

// Delet products/
export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (productID, { rejectWithValue, dispatch }) => {
    try {
      await axios.delete(`/api/v1/products/${productID}`, {
        headers: { token: localStorage.getItem("token") },
      });
      return dispatch(getProducts());
    } catch (error) {
      return rejectWithValue(
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message
      );
    }
  }
);

// Update products/

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      await axios.put(`/api/v1/products/${data.id}`, data, {
        headers: { token: localStorage.getItem("token") },
      });
      return dispatch(getProducts());
    } catch (error) {
      return rejectWithValue(
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message
      );
    }
  }
);

// Update image products/
export const updateProductImage = createAsyncThunk(
  "products/updateProductImage",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const form = new FormData();
      form.append("img", data.file);
      await axios.put(`/api/v1/products/image/${data.id}`, form, {
        headers: { token: localStorage.getItem("token") },
      });
      return dispatch(getProducts());
    } catch (error) {
      return rejectWithValue(
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message
      );
    }
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState: {
    ProductsState: "",
    ProductList: [],
    errors: null,
    loading: false,
  },
  reducers: {
    selectProducts: (state, action) => {
      state.ProductList = action.payload;
    },
  },
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.loading = true;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.ProductList = action.payload;
      state.errors = null;
    },
    [getProducts.rejected]: (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    },
  },
});

export default productSlice.reducer;
export const { selectProducts } = productSlice.actions;
