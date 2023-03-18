

import { configureStore } from "@reduxjs/toolkit";
import upDownSlice from "./slices/upDown";
import  fetchFakeData  from "./slices/apiFatch";

const store = configureStore({
  reducer: {
    upDown: upDownSlice,
    fetchFake:fetchFakeData
  }
});

export default store;