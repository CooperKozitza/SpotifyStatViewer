const { GET_ARTISTS, SET_ARTISTS, SET_ARTISTS_ERROR } = require("./artistsTypes")

const initialState = {
    loading: false,
    items: [],
    errorMsg: ''
}

const artistsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ARTISTS:
            return ({
                ...initialState,
                loading: true
            })
        case SET_ARTISTS:
            return ({
                ...initialState,
                items: action.payload
            })
        case SET_ARTISTS_ERROR:
            return ({
                ...state,
                loading: false,
                errorMsg: action.payload
            })
        default: return state
    }
}

export default artistsReducer;