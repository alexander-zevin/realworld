import {SET_AUTH, SET_AUTH_ERROR} from "../constants/authConstants";

export interface AuthState {
    isAuth: boolean
    error: string | null
}

export interface SetAuth {
    type: typeof SET_AUTH
    isAuth: boolean
}

export interface SetAuthError {
    type: typeof SET_AUTH_ERROR
    error: string | null
}

export type AuthActions = SetAuth | SetAuthError