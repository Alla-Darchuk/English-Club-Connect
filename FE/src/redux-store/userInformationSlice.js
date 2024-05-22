import { createSlice } from "@reduxjs/toolkit";

export const userInformationSlice = createSlice({
    name: "userInformation",
    initialState: {
        userInformation:{
            id: '',
            role: ''
        }
    },
    reducers: {
        set: (state, action) => {
            state.userInformation = action.payload
        }     
    }
})

export function getUserInformation(state) {
    return state.userInformation.userInformation
}