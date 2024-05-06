import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import loginSlice from "./slices/loginSlice";

const store = configureStore({
    reducer:{
        auth: authSlice,
        login: loginSlice,
    }
})

export default store;
