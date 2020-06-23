import {SignInState, SignInActionType} from "./SignInTypes";
import {SET_EMAIL, SET_ERROR, SET_PASSWORD, SET_PROGRESS} from "./SignInConstants";

export const initialState: SignInState = {
    email: '',
    password: '',
    error: null,
    isProgress: false
};

export const signInReducer = (state: SignInState, action: SignInActionType): SignInState => {
    switch (action.type) {
        case SET_EMAIL:
            return {...state, email: action.email};
        case SET_PASSWORD:
            return {...state, password: action.password};
        case SET_ERROR:
            return {...state, error: action.error}
        case SET_PROGRESS:
            return {...state, isProgress: action.isProgress}
        default: return state
    }
}