import { configureStore } from "@reduxjs/toolkit";
import emailReducer from "./slices/emailSlice"; // Import reducers here

export const store = configureStore({
  reducer: {
    email: emailReducer, // Add reducers here
  },
});

// TypeScript types for dispatch & state
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
