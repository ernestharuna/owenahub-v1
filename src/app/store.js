import { configureStore } from "@reduxjs/toolkit";
import authUserReducer from "../features/user/authUserSlice";
import authAdminReducer from "../features/admin/authAdminSlice"

export const store = configureStore({
    reducer: {
        authUser: authUserReducer,
        authAdmin: authAdminReducer,
    }
})