import {ISetEmailAction, ISetPasswordAction, ISetUsernameAction, ISignUpAction} from "./SignUpTypes";
import {SET_EMAIL, SET_PASSWORD, SET_USERNAME, SIGN_UP} from "./SignUpConstants";
import {ISetErrorAction} from "../SignIn/SignInTypes";
import {SET_ERROR} from "../SignIn/SignInConstants";

export const signUpActionCreator = (username: string, email: string, password: string): ISignUpAction => ({
    type: SIGN_UP,
    username: username,
    email: email,
    password: password
})

export const setUsernameActionCreator = (username: string): ISetUsernameAction => ({
    type: SET_USERNAME,
    username: username,
})

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