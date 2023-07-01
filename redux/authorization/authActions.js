import axios from 'axios'

import { GET_TOKEN, SET_TOKEN, TOKEN_ERROR } from './authTypes'

export const setAccessToken = (payload) => ({
    type: SET_TOKEN,
    payload: payload
})

export const accessTokenError = (payload) => ({
    type: TOKEN_ERROR,
    payload: payload
})