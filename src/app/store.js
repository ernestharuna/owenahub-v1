import { configureStore } from "@reduxjs/toolkit";
import authUserReducer from "../features/user/authUserSlice"

export const store = configureStore({
    reducer: {
        authUser: authUserReducer,
    }
})