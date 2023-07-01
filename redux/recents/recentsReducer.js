// The recently played tracks for the logged in user

const { GET_RECENTS, SET_RECENTS, SET_RECENTS_ERROR } = require("./recentsTypes")

const initialState = {
    loading: false,
    items: [],
    errorMsg : ''
}

const recentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RECENTS:
            return ({
                ...initialState,
                loading: true
            })
        case SET_RECENTS:
            return ({
                ...initialState,
                items: action.payload
            })
        case SET_RECENTS_ERROR:
            return ({
                ...state,
                errorMsg: action.payload
            })
        default: return state
    }
}

export default recentsReducer