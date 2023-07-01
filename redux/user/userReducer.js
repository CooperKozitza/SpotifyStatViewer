const { SET_USER, SET_USER_ERROR, LOGOUT_USER } = require("./userTypes")


const initialState = {
    loggedIn: false,
    displayName: '',
    avatar: {
        url: '',
        width: 0,
        height: 0
    },
    email: '',
    error: null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return ({
                loggedIn: true,
                displayName: action.payload.displayName,
                avatar: action.payload.avatar,
                email: action.payload.email,
                error: null
            })
        case SET_USER_ERROR:
            return ({
                ...state,
                error: action.payload.error
            })
        case LOGOUT_USER:
            return ({
                initialState
            })
        default: return state
    }
}

export default userReducer;