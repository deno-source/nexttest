import { combineReducers, configureStore, createStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth-slice";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};
const reducers = combineReducers({
  authReducer,
});

export const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  middleware: [thunk],
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
