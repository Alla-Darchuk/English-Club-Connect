import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { 
    persistStore, 
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { userInformationSlice } from "./userInformationSlice";
import { chatSlice } from "./chatSlice";

const rootReducer = combineReducers({
    userInformation: userInformationSlice.reducer,
    chat: chatSlice.reducer
})

const persistConfig = {
    key: 'root',
    storage: storage,
    blacklist: ['chat']
  }

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
        
    
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store);

export default store;