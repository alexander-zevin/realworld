import {SET_PROFILE_ERROR, SET_PROFILE} from "../constants/profileConstants";

export interface User {
    username: string
    email: string
    bio: string
    image: string
}

export interface ProfileState {
    user: User
    error: {
        name: string | null
        message: string | null
    }
}

export interface SetProfile {
    type: typeof SET_PROFILE
    user: User
}

export interface SetError {
    type: typeof SET_PROFILE_ERROR
    error: {
        name: string | null
        message: string | null
    }
}

export type ProfileActionType = SetProfile | SetError