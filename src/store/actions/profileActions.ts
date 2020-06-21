import {SET_PROFILE_ERROR, SET_PROFILE} from "../constants/profileConstants";
import {SetError, SetProfile} from "../types/profileTypes";

export const setProfile = (user: {username: string, email: string, token: string}): SetProfile => ({
    type: SET_PROFILE,
    user: user
})

export const setProfileError = (name: string | null, message: string | null): SetError => ({
    type: SET_PROFILE_ERROR,
    error: {
        name: name,
        message: message
    }
})