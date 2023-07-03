import artistsReducer from "@/redux/artists/artistsReducer"
import authReducer from "@/redux/authorization/authReducer"
import recentsReducer from "@/redux/recents/recentsReducer"
import userReducer from "@/redux/user/userReducer"
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import persistStore from "redux-persist/lib/persistStore"
import persistReducer from "redux-persist/lib/persistReducer"
import storage from "redux-persist/lib/storage"

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    recents: recentsReducer,
    artists: artistsReducer
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user', 'auth']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({reducer: persistedReducer})
export const persistor = persistStore(store)