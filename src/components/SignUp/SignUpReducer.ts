import {ISignUpState, SignUpActionType} from "./SignUpTypes";
import {SET_EMAIL, SET_PASSWORD, SET_USERNAME} from "./SignUpConstants";

export const initialState: ISignUpState = {
    username: '',
    email: '',
    password: ''
};

export const signUpReducer = (state: ISignUpState, action: SignUpActionType): ISignUpState => {
    switch (action.type) {
        case SET_USERNAME:
            return {...state, username: action.username};
        case SET_EMAIL:
            return {...state, email: action.email};
        case SET_PASSWORD:
            return {...state, password: action.password};
        default: return state
    }
}