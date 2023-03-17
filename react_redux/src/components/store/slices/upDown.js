import { createSlice } from "@reduxjs/toolkit";

const upDownSlice = createSlice({
  name: "upDownCount",
  initialState: 0,
  reducers: {
    increseCount(state, action) {
      state =state+5;
      return state;
    },
    decreseCount : (state, action) =>{
      state =state-5;
      return state;
    },
    paloadIncrease : (state, action) =>{
      state =state+(action.payload);
      console.log(action.payload);
      return state;
    },
  }
});

export default upDownSlice.reducer;
//action creator are exports
// in the object has 3 acton creater upDownSlice.actions
//destracther the object below

export const {increseCount, decreseCount, paloadIncrease}=upDownSlice.actions;