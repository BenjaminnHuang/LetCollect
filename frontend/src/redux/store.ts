// src/app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { postsApi } from "./api/postsApi";

export const store = configureStore({
  reducer: {
    // Add the postsApi reducer here
    [postsApi.reducerPath]: postsApi.reducer,
  },
  // Adding the middleware from the postsApi
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
});

// Use with React-Redux's <Provider> and useSelector
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
