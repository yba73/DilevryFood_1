import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./shopping-cart/cartSlice";
import cartUiSlice from "./shopping-cart/cartUiSlice";
import userReducer from "./shopping-cart/userSlice";
import productReducer from "./shopping-cart/productSlice";
import homeReducer from "./shopping-cart/homeSlice";
import CategoryReducer from "./shopping-cart/CategorySlice";
import cartReducer from "./shopping-cart/myCartSlice";
import checkoutReducer from "./shopping-cart/chekoutSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    cartUi: cartUiSlice.reducer,
    user: userReducer,
    products: productReducer,
    home: homeReducer,
    myCart: cartReducer,
    category: CategoryReducer,
    checkout: checkoutReducer,
  },
});

export default store;
