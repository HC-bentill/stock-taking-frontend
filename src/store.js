import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./features/userSlice";
import sideMenuReducer from "./features/sideMenuSlice";

// The key specifies the ID of the persist object and the storage determines the type of storage being used.
const persistConfig = {
  key: "root",
  storage: storage,
};

// Combine all the reducers from slices in your app
const rootReducer = combineReducers({
  user: userReducer,
  sideMenu: sideMenuReducer,
});

// Create a persistent reducer 1st arg: config for persist reducer. 2nd arg: combined reducers
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
