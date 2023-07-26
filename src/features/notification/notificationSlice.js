import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    message: "",
}

export const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        addMessage: (state, action) => {
            state.message = action.payload;
        },
        removeMessage: (state) => {
            state.message = "";
        }
    }
})

export const { addMessage, removeMessage } = notificationSlice.actions

export default notificationSlice.reducer