import {SetEmail, SetError, SetPassword} from "./SignInTypes";
import {SET_EMAIL, SET_ERROR, SET_PASSWORD} from "./SignInConstants";

export const setEmail = (email: string): SetEmail => ({
    type: SET_EMAIL,
    email: email
})

export const setPassword = (password: string): SetPassword => ({
    type: SET_PASSWORD,
    password: password
})

export const setError = (error: string): SetError => ({
    type: SET_ERROR,
    error: error
})