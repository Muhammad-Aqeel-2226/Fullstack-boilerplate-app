import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";

const counterStore = configureStore({
  reducer: {
    authSlice: authSlice.reducer
  },
});
 

export default counterStore;
