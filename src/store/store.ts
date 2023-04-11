import { configureStore } from "@reduxjs/toolkit";
import repoReducer from "./repoSlice";

export const store = configureStore({
    reducer: {
        repos : repoReducer,
    },
});

export type AppDispatch = typeof store.dispatch; // Définition du type AppDispatch
export default store;