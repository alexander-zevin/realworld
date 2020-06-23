import {SET_EMAIL, SET_ERROR, SET_PASSWORD, SET_PROGRESS} from "./SignInConstants";

export interface SignInState{
    email: string
    password: string
    error: string | null
    isProgress: boolean
}

export interface SetEmail {
    type: typeof SET_EMAIL,
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

export interface SetProgress {
    type: typeof SET_PROGRESS
    isProgress: boolean
}

export type SignInActionType =  SetEmail | SetPassword | SetError | SetProgress