import { configureStore } from "@reduxjs/toolkit";
import { actionGlobal } from "./actions";

export const store = configureStore({
  reducer: {
    actions: actionGlobal.reducer,
  },
});
