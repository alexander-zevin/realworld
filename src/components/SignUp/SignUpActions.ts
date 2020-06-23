import {SetEmail, SetSignError, SetPassword, SetUsername} from "./SignUpTypes";
import {SET_EMAIL, SET_PASSWORD, SET_SIGN_ERROR, SET_USERNAME} from "./SignUpConstants";
import {SET_PROGRESS} from "../SignIn/SignInConstants";
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

export const setSignError = (username: string, email: string): SetSignError => ({
    type: SET_SIGN_ERROR,
    error: {
        username: username,
        email: email
    }
})

export const setProgress = (isProgress: boolean): SetProgress => ({
    type: SET_PROGRESS,
    isProgress: isProgress
})