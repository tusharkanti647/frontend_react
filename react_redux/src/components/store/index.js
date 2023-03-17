

import { configureStore } from "@reduxjs/toolkit";
import upDownSlice from "./slices/upDown";

const store = configureStore({
  reducer: {
    upDown: upDownSlice
  }
});

export default store;