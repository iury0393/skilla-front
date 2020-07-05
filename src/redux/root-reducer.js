import { combineReducers } from "redux";

import cartReducer from "./cart/cart.reducer.js";

export default combineReducers({
  cart: cartReducer,
});
