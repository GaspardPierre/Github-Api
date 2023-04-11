import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Repo, RepoState } from "../types/type";



export const fetchRepos = createAsyncThunk("repos/fetchRepos", async (search: string) => {
  const response = await fetch(`https://api.github.com/search/repositories?q=${search}`);
  const reposData = await response.json();
  return reposData.items as Repo [] ;
});

const initialState: RepoState = {
    repos: [],
    isLoading: false,
    error: null,
  };
  
const reposSlice = createSlice({
  name: "repos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRepos.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchRepos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.repos = action.payload;
      })
      .addCase(fetchRepos.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || null;
      });
  },
});

export default reposSlice.reducer;
