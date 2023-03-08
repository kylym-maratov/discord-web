import { configureStore } from "@reduxjs/toolkit";
import { appReducer } from "./reducers/app";
import { chatReducer } from "./reducers/chat";

export const store = configureStore({
    reducer: {
        app: appReducer,
        chat: chatReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;