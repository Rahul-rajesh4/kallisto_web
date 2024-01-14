import { configureStore } from "@reduxjs/toolkit";
import eventReducer from "../SLICE/eventslice";

export const store = configureStore({
    reducer:{
        event : eventReducer
    },
})