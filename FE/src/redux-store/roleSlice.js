
import { createSlice } from "@reduxjs/toolkit";

export const roleSlice = createSlice({
    name: "role",
    initialState: {
        role: ''
    },
    reducers: {
        set: (state, action) => {
            state.role = action.payload
        }     
    }
})

export function getRole(state) {
    return state.role.role
}