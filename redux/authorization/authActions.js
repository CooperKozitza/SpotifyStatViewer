import axios from 'axios'

import { GET_TOKEN, SET_TOKEN, TOKEN_ERROR } from './authTypes'

export const getAccessToken = () => ({
    type: GET_TOKEN
})

export const setAccessToken = (payload) => ({
    type: SET_TOKEN,
    payload: payload
})

export const accessTokenError = (payload) => ({
    type: TOKEN_ERROR,
    payload: payload
})

export const authorize = () => (
    async (dispatch, getState) => {
        dispatch(getAccessToken());
        var response = await axios({
            method: 'get',
            url: '/api/auth/login'
        }).then((response) => {
            console.log(response);
            dispatch(setAccessToken(response))
        }).catch((error) => {
            console.log(error);
            dispatch(accessTokenError(error))
        });
    }
)