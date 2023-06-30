import authReducer from "@/redux/authorization/authReducer"
import userReducer from "@/redux/user/userReducer"
import { configureStore } from "@reduxjs/toolkit"

export default configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer
    }
})
