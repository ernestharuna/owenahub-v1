import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: "",
    token: localStorage.getItem('USER_TOKEN'),
    loading: false,
}

export const authUserSlice = createSlice({
    name: "authUser",
    initialState,
    reducers: {
        getUser: (state) => {
            state.loading = true;
        },

        setUser: (state, action) => {
            state.loading = false;
            state.user = action.payload;
        },

        setToken: (state, action) => {
            state.token = action.payload;
            localStorage.setItem('USER_TOKEN', action.payload);
        },

        logoutUser: (state) => {
            state.user = "";
            state.loading = true;
            localStorage.removeItem('USER_TOKEN');
        },
    },
})

export const { getUser, setUser, setToken, logoutUser } = authUserSlice.actions

export default authUserSlice.reducer