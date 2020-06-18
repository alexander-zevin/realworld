import {SignInState, SignInActionType} from "./SignInTypes";
import {SET_EMAIL, SET_ERROR, SET_PASSWORD} from "./SignInConstants";

export const initialState: SignInState = {
    email: '',
    password: '',
    error: null
};

export const signInReducer = (state: SignInState, action: SignInActionType): SignInState => {
    switch (action.type) {
        case SET_EMAIL:
            return {...state, email: action.email};
        case SET_PASSWORD:
            return {...state, password: action.password};
        case SET_ERROR:
            return {...state, error: action.error}
        default: return state
    }
}