import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InititalState {
    contactActive: any;
    activeChat: any;
}

const initialState: InititalState = {
    activeChat: null,
    contactActive: null
}

const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        setActiveChat(state, action: PayloadAction<any>) {
            state.activeChat = action.payload;
        },
        setActiveContact(state, action: PayloadAction<any>) {
            state.activeChat = action.payload;
        }
    }
})

export const { setActiveChat, setActiveContact } = chatSlice.actions;

export const chatReducer = chatSlice.reducer;