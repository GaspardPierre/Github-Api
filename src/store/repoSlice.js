import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRepos = createAsyncThunk("repos/fetchRepos", async (search) => {
const response = await fetch(`https://api.github.com/search/repositories?q=${search}`);  
const reposData = await response.json();
return reposData.items;
});

const reposSlice = createSlice({
    name: "repos",
    initialState: {
        repos:[],
        isLoading : false,
        error: null,
    },
    reducers : {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchRepos.pending, (state, action) => {
            state.isLoading = true;
            

        })
        .addCase(fetchRepos.fulfilled, (state,action) => {
            state.isLoading = false;
            state.repos = action.payload;
        })
        .addCase(fetchRepos.rejected, (state, action) => {
            state.isLoading = false;
            state.error =   action.error.message;
        });
    },
});

export default reposSlice.reducer