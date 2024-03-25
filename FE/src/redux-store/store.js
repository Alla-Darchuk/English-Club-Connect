import { configureStore } from "@reduxjs/toolkit"
import { roleSlice } from "./roleSlice"


export const store = configureStore({
    reducer: {
        role: roleSlice.reducer
    }
})