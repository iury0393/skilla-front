import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import cartReducer from "./cart/cart.reducer";

import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root", //em que ponto vc quer comecar fazendo storage.
  storage,
  whitelist: ["cart"], //essa propriedade é um array contendo os stringnames de qualquer reducer que a gente quer guardar
};

const rootReducer = combineReducers({
  cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
