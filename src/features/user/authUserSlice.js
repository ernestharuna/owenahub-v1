import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null,
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
        clearUser: (state) => {
            state.user = null;
            state.token = null;
        }
    },
})

export const { getUser, setUser, clearUser } = authUserSlice.actions

export default authUserSlice.reducer