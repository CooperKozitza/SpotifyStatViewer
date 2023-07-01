import axios from 'axios'
import { GET_RECENTS, SET_RECENTS, SET_RECENTS_ERROR } from './recentsTypes'

export const getRecentlyPlayedTracks = () => (
    (dispatch, getState) => {
        if (!getState().user.loggedIn)
            dispatch(setRecentsError('User Not Logged In'))
        
        dispatch(getRecents());
        axios.get('https://api.spotify.com/v1/me/player/recently-played', {
            headers: {
                'Authorization': 'Bearer ' + getState().auth.accessToken
            }
        }).then(response => {
            dispatch(setRecents(response.data.items))
        }).catch(error => {
            dispatch(setRecentsError(error.message))
        })
    }
)

export const getRecents = () => ({
    type: GET_RECENTS
})

export const setRecents = payload => ({
    type: SET_RECENTS,
    payload: payload
})

export const setRecentsError = payload => ({
    type: SET_RECENTS_ERROR,
    payload: payload
})