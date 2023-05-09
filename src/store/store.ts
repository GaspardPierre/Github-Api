import { configureStore } from "@reduxjs/toolkit";
import repoReducer from "./repoSlice";
import { RepoState } from "../types/type";

export const store = configureStore({
    reducer: {
        repos : repoReducer,
    },
});
export type RootState = {
    repos: RepoState;
  };

export type AppDispatch = typeof store.dispatch; // Définition du type AppDispatch
export default store;