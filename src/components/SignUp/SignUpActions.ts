import {SetEmail, SetError, SetPassword, SetUsername} from "./SignUpTypes";
import {SET_EMAIL, SET_PASSWORD, SET_USERNAME} from "./SignUpConstants";
import {SET_ERROR, SET_PROGRESS} from "../SignIn/SignInConstants";
import {SetProgress} from "../SignIn/SignInTypes";

export const setUsername = (username: string): SetUsername => ({
    type: SET_USERNAME,
    username: username
})

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