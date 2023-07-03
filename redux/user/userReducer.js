const { SET_USER, SET_USER_ERROR, LOGOUT_USER } = require("./userTypes")


const initialState = {
    loggedIn: false,
    displayName: '',
    user: {},
    error: ''
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return ({
                loggedIn: true,
                user: action.payload,
                error: ''
            })
        case SET_USER_ERROR:
            return ({
                ...state,
                error: action.payload
            })
        case LOGOUT_USER:
            return initialState
        default: return state
    }
}

export default userReducer;