import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Application-01/TodoSlice"
export const Store=configureStore({
    reducer:todoReducer,
})