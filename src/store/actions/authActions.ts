import {SET_AUTH, SET_AUTH_ERROR} from "../constants/authConstants";
import {SetAuth, SetAuthError} from "../types/authTypes";

export const setAuth = (isAuth: boolean): SetAuth => ({
    type: SET_AUTH,
    isAuth: isAuth
})

export const setAuthError = (error: string | null): SetAuthError => ({
    type: SET_AUTH_ERROR,
    error: error
})