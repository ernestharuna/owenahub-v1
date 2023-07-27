import { configureStore } from "@reduxjs/toolkit";

import authUserReducer from "../features/user/authUserSlice";
import authAdminReducer from "../features/admin/authAdminSlice"
import authMentorReducer from "../features/mentor/authMentorSlice";
import notificationReducer from "../features/notification/notificationSlice";

export const store = configureStore({
    reducer: {
        authUser: authUserReducer,
        authAdmin: authAdminReducer,
        authMentor: authMentorReducer,
        notification: notificationReducer
    }
})