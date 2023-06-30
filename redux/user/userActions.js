import axios from "axios"
import { LOGOUT_USER, SET_USER, SET_USER_ERROR } from "./userTypes"


export const login = () => (
    (dispatch, getState) => {
        axios.get('https://api.spotify.com/v1/me', {
                headers: {
                    'Authorization': 'Bearer ' + getState.auth.authToken
                }
            }
        ).then(response => response.json()).then(response => {
            dispatch(setUser({  
                displayName: response.display_name,
                avatar: response.images[0] | null,
                email: response.email
            }))
        }).catch(error => {
            dispatch(setUserError(error))
        })
    }
)

export const setUserError = payload => ({
    type: SET_USER_ERROR,
    payload: payload
})

export const setUser = payload => ({
    type: SET_USER,
    payload: payload
})

export const logout = () => ({
    type: LOGOUT_USER
})