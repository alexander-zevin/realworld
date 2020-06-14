import {IProfileState, ProfileActionType} from "../types/profileTypes";
import {SET_ERROR, SET_PROFILE} from "../constants/profileConstants";

const initialState: IProfileState = {
    user: {
        username: '',
        email: ''
    },
    error: {
        name: null,
        message: null
    }
};

export const profileReducer = (state = initialState, action: ProfileActionType): IProfileState => {
    switch (action.type) {
        case SET_PROFILE:
            return {...state, user: action.user}
        case SET_ERROR:
            return {...state, error: action.error}
        default: return state
    }
}