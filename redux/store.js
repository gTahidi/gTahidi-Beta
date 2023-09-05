import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./slices/createSlice";

const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
  },
 
});

export default store;
