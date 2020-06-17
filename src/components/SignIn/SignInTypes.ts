import {SET_EMAIL, SET_ERROR, SET_PASSWORD, SET_USERNAME, SIGN_IN} from "./SignInConstants";

export interface ISignInState{
    email: string
    password: string
    error: string | null
}

export interface ISignInAction {
    type: typeof SIGN_IN,
    email: string,
    password: string
}

export interface ISetEmailAction {
    type: typeof SET_EMAIL,
    email: string
}

export interface ISetPasswordAction {
    type: typeof SET_PASSWORD
    password: string
}

export interface ISetErrorAction {
    type: typeof SET_ERROR
    error: string
}

export type SignInActionType = ISignInAction | ISetEmailAction | ISetPasswordAction | ISetErrorAction