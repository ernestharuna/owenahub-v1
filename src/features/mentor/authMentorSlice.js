import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mentor: "",
    token: localStorage.getItem('MENTOR_TOKEN'),
    loading: false,
}

export const authMentorSlice = createSlice({
    name: "authMentor",
    initialState,
    reducers: {
        getMentor: (state) => {
            state.loading = true;
        },

        setMentor: (state, action) => {
            state.loading = false;
            state.mentor = action.payload;
        },

        setToken: (state, action) => {
            state.token = action.payload;
            localStorage.setItem('MENTOR_TOKEN', action.payload);
        },

        logoutMentor: (state) => {
            state.mentor = "";
            localStorage.removeItem('MENTOR_TOKEN');
        }
    }
});

export const { getMentor, setMentor, setToken, logoutMentor } = authMentorSlice.actions

export default authMentorSlice.reducer