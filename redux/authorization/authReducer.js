import { SET_TOKEN, TOKEN_ERROR, LOGOUT_AUTH } from './authTypes' 

const initialState = {
    loading: false,
    authToken: '',
    refreshToken: '',
    expiresIn: 0,
    errorMsg: ''
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOKEN:
            return ({
                loading: false,
                accessToken: action.payload.access_token,
                refreshToken: action.payload.refresh_token,
                expiresIn: action.payload.expires_in,
                errorMsg: ''
            })
        case TOKEN_ERROR:
            return ({
                ...state,
                loading: false,
                errorMsg: action.payload.errorMsg
            })
        case LOGOUT_AUTH:
            return initialState
        default:
            return state
    }
}

export default authReducer;
