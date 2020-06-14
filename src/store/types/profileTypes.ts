import {SET_ERROR, SET_PROFILE} from "../constants/profileConstants";

export interface IProfileState {
    user: {
        username: string
        email: string
    }
    error: {
        name: string | null
        message: string | null
    }
}

export interface ISetProfileAction {
    type: typeof SET_PROFILE
    user: {
        username: string
        email: string
    }
}

export interface ISetErrorAction {
    type: typeof SET_ERROR
    error: {
        name: string | null
        message: string | null
    }
}

export type ProfileActionType = ISetProfileAction | ISetErrorAction