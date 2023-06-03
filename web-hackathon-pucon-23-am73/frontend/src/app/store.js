import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { user, help, blogs, comments } from './index'
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';

const persistConfig = {
   key: 'root',
   storage,
}
const rootReducer = combineReducers({
   user
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
   reducer: persistedReducer,
   middleware: [thunk, logger]
})
export const persistor = persistStore(store) //persists and rehydrates the state