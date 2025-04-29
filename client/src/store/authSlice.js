import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "counter",
  initialState: { counterVal: 0 },
  reducers: {
    login: ()=>{},
    signup: ()=>{},
    logout: ()=>{},
  },
});

export const counterAction = authSlice.actions;

export default authSlice;
