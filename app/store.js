import authReducer from "@/redux/authorization/authReducer"
import { configureStore } from "@reduxjs/toolkit"

export default configureStore({
    reducer: {
        auth: authReducer
    }
})
