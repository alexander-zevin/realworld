import {ISignInState, SignInActionType} from "./SignInTypes";
import {SET_EMAIL, SET_PASSWORD} from "./SignInConstants";

export const initialState: ISignInState = {
    email: '',
    password: ''
};

export const signInReducer = (state: ISignInState, action: SignInActionType): ISignInState => {
    switch (action.type) {
        case SET_EMAIL:
            return {...state, email: action.email};
        case SET_PASSWORD:
            return {...state, password: action.password};
        default: return state
    }
}