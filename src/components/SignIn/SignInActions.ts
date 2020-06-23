import {SetEmail, SetError, SetPassword, SetProgress} from "./SignInTypes";
import {SET_EMAIL, SET_ERROR, SET_PASSWORD, SET_PROGRESS} from "./SignInConstants";

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

export const setProgress = (isProgress: boolean): SetProgress => ({
    type: SET_PROGRESS,
    isProgress: isProgress
})