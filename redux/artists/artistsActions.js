import axios from 'axios'
import { GET_ARTISTS, SET_ARTISTS, SET_ARTISTS_ERROR } from './artistsTypes'

export const getArtistsForUser = (timePeriod = 'medium_term') => (
    (dispatch, getState) => {
        dispatch(getArtists())
        if (!getState().user.loggedIn)
            dispatch(setArtistsError('User Not Logged In'))
        
        axios.get('https://api.spotify.com/v1/me/top/artists?time_range=' + timePeriod, {
            headers: {
                'Authorization': 'Bearer ' + getState().auth.accessToken
            }
        }).then(response => {
            dispatch(setArtists(response.data.items))
        }).catch(error => {
            dispatch(setArtistsError(error.message))
        })
    }
)

export const setArtistsError = payload => ({
    type: SET_ARTISTS_ERROR,
    payload: payload
})

export const setArtists = payload => ({
    type: SET_ARTISTS,
    payload: payload
})

export const getArtists = () => ({
    type: GET_ARTISTS
})