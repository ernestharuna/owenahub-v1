import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    admin: "",
    token: localStorage.getItem('ADMIN_TOKEN'),
    loading: false,
}

export const authAdminSlice = createSlice({
    name: "authAdmin",
    initialState,
    reducers: {
        getAdmin: (state) => {
            state.loading = true;
        },

        setAdmin: (state, action) => {
            state.loading = false;
            state.admin = action.payload;
        },

        setToken: (state, action) => {
            state.token = action.payload;
            localStorage.setItem('ADMIN_TOKEN', action.payload);
        },

        logoutAdmin: (state) => {
            state.admin = "";
            state.loading = true;
            localStorage.removeItem('ADMIN_TOKEN');
        }
    }
})

export const { getAdmin, setAdmin, setToken, logoutAdmin } = authAdminSlice.actions

export default authAdminSlice.reducer