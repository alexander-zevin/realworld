import {SignUpState, SignUpActions} from "./SignUpTypes";
import {SET_EMAIL, SET_PASSWORD, SET_USERNAME} from "./SignUpConstants";
import {SET_ERROR} from "../SignIn/SignInConstants";

export const initialState: SignUpState = {
    username: '',
    email: '',
    password: '',
    error: ''
};

export const signUpReducer = (state: SignUpState, action: SignUpActions): SignUpState => {
    switch (action.type) {
        case SET_USERNAME:
            return {...state, username: action.username};
        case SET_EMAIL:
            return {...state, email: action.email};
        case SET_PASSWORD:
            return {...state, password: action.password};
        case SET_ERROR:
            return {...state, error: action.error}
        default: return state
    }
}