const { GET_TOKEN, SET_TOKEN, TOKEN_ERROR } = require("./authTypes")

const initialState = {
    loading: false,
    authToken: '',
    refreshToken: '',
    expiresIn: 0,
    errorMsg: ''
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TOKEN:
            return ({
                loading: true,
                authToken: '',
                refreshToken: '',
                expiresIn: 0,
                errorMsg: ''
            });
        case SET_TOKEN:
            return ({
                loading: false,
                authToken: action.payload.auth_token,
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
        default:
            return state
    }
}

export default authReducer;