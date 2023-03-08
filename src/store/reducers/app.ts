import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InititalState {
    isDarkMode: boolean;
    isLoading: boolean
}

const initialState: InititalState = {
    isDarkMode: true,
    isLoading: true
}

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setDarkMode(state: InititalState, action: PayloadAction<boolean>) {
            state.isDarkMode = action.payload;
        },
        setLoading(state: InititalState, action: PayloadAction<boolean>) {
            state.isLoading = action.payload;
        }
    }
})

export const { setDarkMode, setLoading } = appSlice.actions;
export const appReducer = appSlice.reducer;