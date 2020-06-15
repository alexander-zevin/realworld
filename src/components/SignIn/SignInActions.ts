import {ISetEmailAction, ISetPasswordAction, ISignInAction} from "./SignInTypes";
import {SET_EMAIL, SET_PASSWORD, SIGN_IN} from "./SignInConstants";

export const signInActionCreator = (email: string, password: string): ISignInAction => ({
    type: SIGN_IN,
    email: email,
    password: password
})

export const setEmailActionCreator = (email: string): ISetEmailAction => ({
    type: SET_EMAIL,
    email: email
})

export const setPasswordActionCreator = (password: string): ISetPasswordAction => ({
    type: SET_PASSWORD,
    password: password
})