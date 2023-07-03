import artistsReducer from "@/redux/artists/artistsReducer"
import authReducer from "@/redux/authorization/authReducer"
import recentsReducer from "@/redux/recents/recentsReducer"
import userReducer from "@/redux/user/userReducer"
import { configureStore } from "@reduxjs/toolkit"

export default configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        recents: recentsReducer,
        artists: artistsReducer
    }
})
