import {SET_EMAIL, SET_PASSWORD, SET_USERNAME, SIGN_UP} from "./SignUpConstants";

export interface ISignUpState{
    username: string
    email: string
    password: string
}

export interface ISignUp {
    (username: string, email: string, password: string): void
}

export interface ISignUpAction {
    type: typeof SIGN_UP
    username: string
    email: string
    password: string
}

export interface ISetUsernameAction {
    type: typeof SET_USERNAME
    username: string
}

export interface ISetEmailAction {
    type: typeof SET_EMAIL
    email: string
}

export interface ISetPasswordAction {
    type: typeof SET_PASSWORD
    password: string
}

export type SignUpActionType = ISignUpAction | ISetUsernameAction | ISetEmailAction | ISetPasswordAction