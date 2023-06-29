import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    admin: "",
    token: localStorage.getItem('ADMIN_TOKEN'),
    loading: false
}

export const authAdminSlice = createSlice({
    name: "authAdmin",
    initialState,
    reducers: {
        getAdmin: (state) => {
            state.loading = true
        },

        setUser: (state, action) => {
            state.loading = false;
            state.admin = action.payload;
        },

        setToken: (state, action) => {
            state.token = action.payload;
            localStorage.setItem('ADMIN_TOKEN', action.payload)
        },

        logoutAdmin: (state) => {
            state.admin = "",
                localStorage.removeItem('ADMIN_TOKEN')
        }
    }
})

export const { getAdmin, setUser, setToken, logoutAdmin } = authAdminSlice.actions

export default authAdminSlice.reducer