import {SET_EMAIL, SET_PASSWORD, SET_USERNAME, SIGN_UP} from "./SignUpConstants";
import {SET_ERROR} from "../SignIn/SignInConstants";

export interface SignUpState{
    username: string
    email: string
    password: string
    error: string
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

export interface SetError {
    type: typeof SET_ERROR
    error: string
}

export type SignUpActions = SignUp | SetUsername | SetEmail | SetPassword | SetError