import { combineReducers, configureStore } from "@reduxjs/toolkit";
import listSlice from "./listSlice";
import searchValueSlice from "./searchValueSlice";
import { Login } from "@mui/icons-material";

const rootState = combineReducers({
  list: listSlice,
  searchValue: searchValueSlice,
});

const store = configureStore({
  reducer: rootState,
  devTools: true,
});

export { store };

