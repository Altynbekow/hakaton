import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../../api/userApi";

export const postUser = createAsyncThunk('auth/postUser', async (data) => {
    return await userApi.createUser(data)
})

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        dataUser: null,
        isLoading: false,
        error: ""
    },
    extraReducers: builder => {
        builder.addCase(postUser.pending, (state) => {
            state.isLoading = true
        });
        builder.addCase(postUser.fulfilled, (state, action) => {
            state.dataUser = action.payload;
            state.isLoading = false
        });
        builder.addCase(postUser.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false
        });
    }
})

export default authSlice.reducer;
 