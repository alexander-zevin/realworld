import {SET_AUTH, SET_AUTH_ERROR} from "../constants/authConstants";
import {AuthActions, AuthState} from "../types/authTypes";

const initialState: AuthState = {
    isAuth: false,
    error: null
};

export const authReducer = (state = initialState, action: AuthActions): AuthState => {
    switch (action.type) {
        case SET_AUTH:
            return {...state, isAuth: action.isAuth}
        case SET_AUTH_ERROR:
            return {...state, error: action.error}
        default:
            return state

    }
}