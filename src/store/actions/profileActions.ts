import {SET_ERROR, SET_PROFILE} from "../constants/profileConstants";
import {ISetErrorAction, ISetProfileAction} from "../types/profileTypes";

export const setProfileActionCreator = (user: {username: string, email: string}): ISetProfileAction => ({
    type: SET_PROFILE,
    user: user
})

export const setErrorActionCreator = (name: string | null, message: string | null): ISetErrorAction => ({
    type: SET_ERROR,
    error: {
        name: name,
        message: message
    }
})