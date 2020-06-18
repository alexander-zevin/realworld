import {SET_PROFILE_ERROR, SET_PROFILE} from "../constants/profileConstants";

export interface ProfileState {
    user: {
        username: string
        email: string
        /*bio: string
        image: string | null*/
    }
    error: {
        name: string | null
        message: string | null
    }
}

export interface SetProfile {
    type: typeof SET_PROFILE
    user: {
        username: string
        email: string
    }
}

export interface SetError {
    type: typeof SET_PROFILE_ERROR
    error: {
        name: string | null
        message: string | null
    }
}

export type ProfileActionType = SetProfile | SetError