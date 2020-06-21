import {ProfileState, ProfileActionType} from "../types/profileTypes";
import {SET_PROFILE_ERROR, SET_PROFILE} from "../constants/profileConstants";

const initialState: ProfileState = {
    user: {
        username: '',
        email: '',
        bio: '',
        image: '',
        token: ''
    },
    error: {
        name: null,
        message: null
    }
};

export const profileReducer = (state = initialState, action: ProfileActionType): ProfileState => {
    switch (action.type) {
        case SET_PROFILE:
            return {
                ...state,
                user: {
                    ...state.user,
                    username: action.user.username,
                    email: action.user.email,
                    token: action.user.token
                }
            }
        case SET_PROFILE_ERROR:
            return {...state, error: action.error}
        default: return state
    }
}