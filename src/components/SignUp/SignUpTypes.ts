import {SET_EMAIL, SET_PASSWORD, SET_SIGN_ERROR, SET_USERNAME, SIGN_UP} from "./SignUpConstants";
import {SET_PROGRESS} from "../SignIn/SignInConstants";

export interface SignUpState{
    username: string
    email: string
    password: string
    error: {
        username: string
        email: string
    }
    isProgress: boolean
}

export interface SignUp {
    type: typeof SIGN_UP
    username: string
    email: string
    password: string
}

export interface SetUsername {
    type: typeof SET_USERNAME
    username: string
}

export interface SetEmail {
    type: typeof SET_EMAIL
    email: string
}

export interface SetPassword {
    type: typeof SET_PASSWORD
    password: string
}

export interface SetSignError {
    type: typeof SET_SIGN_ERROR
    error: {
        username: string
        email: string
    }
}

export interface SetProgress {
    type: typeof SET_PROGRESS
    isProgress: boolean
}

export type SignUpActions = SignUp | SetUsername | SetEmail | SetPassword | SetSignError | SetProgress