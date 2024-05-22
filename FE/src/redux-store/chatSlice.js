
import { createSlice } from "@reduxjs/toolkit";

export const chatSlice = createSlice({
    name: "chat",
    initialState: {
        chat:{
            unreadChatsId:[],
            activeChat: '',
            messages: []
        }
    },
    reducers: {
        setUnread: (state, {payload}) => {
            state.chat.unreadChatsId = payload
        },
        setHistory: (state, {payload}) => {
            state.chat.messages = payload
        },
        setActiveChat: (state, {payload}) => {
            state.chat.activeChat = payload
        },
        addMessage: (state, {payload}) => {
            if(state.chat.activeChat == payload.userId){
                state.chat.messages.push(payload)
            } else {
                if(!state.chat.unreadChatsId.includes(payload.userId)){
                    state.chat.unreadChatsId.push(payload.userId)
                }
            }
        },
        removeFromUnread: (state, {payload}) => {
            let index = payload
            state.chat.unreadChatsId = state.chat.unreadChatsId.filter((item) => item !== index)
        }    
    }
})

export function getChat(state) {
    return state.chat.chat
}