import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../../api/userApi";

export const loginUser=createAsyncThunk('/login/loginUser', async(data)=>{
    const token=(await userApi.loginUser(data)).data.access_token;
    localStorage.setItem('token', token);
    return await userApi.getUser(token)
})

export const getUserElse=createAsyncThunk('/login/getUserLS', async()=>{
    const token = localStorage.getItem('token')
    return await userApi.getUser(token)
} )

const loginSlice=createSlice({
    name:'login',
    initialState:{
        dataUser:null,
        load:false,
        err:''
    },
    extraReducers:(builder)=>{
        builder.addCase(loginUser.pending, (state) => {
            state.load = true
        });
        builder.addCase(loginUser.fulfilled, (state, {payload}) => {
            state.dataUser = payload.data;
            state.load = false
        });
        builder.addCase(loginUser.rejected, (state, action) => {
            state.err = action.payload;
            state.load = false
        });
    }
})

export default loginSlice.reducer;