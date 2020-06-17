import {ISetEmailAction, ISetErrorAction, ISetPasswordAction, ISignInAction} from "./SignInTypes";
import {SET_EMAIL, SET_ERROR, SET_PASSWORD} from "./SignInConstants";

export const setEmailActionCreator = (email: string): ISetEmailAction => ({
    type: SET_EMAIL,
    email: email
})

export const setPasswordActionCreator = (password: string): ISetPasswordAction => ({
    type: SET_PASSWORD,
    password: password
})

export const setErrorActionCreator = (error: string): ISetErrorAction => ({
    type: SET_ERROR,
    error: error
})