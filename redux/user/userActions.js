import axios from "axios"
import { LOGOUT_AUTH } from "../authorization/authTypes";
import { LOGOUT_USER, SET_USER, SET_USER_ERROR } from "./userTypes"


export const login = () => (
    (dispatch, getState) => {
        axios.get('https://api.spotify.com/v1/me', {
            headers: {
                'Authorization': 'Bearer ' + getState().auth.accessToken
            }
        }
        ).then(response => {
            console.log(response);
            dispatch(setUser(response.data))
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

export const logout = () => (
    (dispatch) => {
        dispatch({ type: LOGOUT_USER })
        dispatch({ type: LOGOUT_AUTH })
    }
)