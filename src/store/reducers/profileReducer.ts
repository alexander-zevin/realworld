import {ProfileState, ProfileActionType} from "../types/profileTypes";
import {SET_PROFILE_ERROR, SET_PROFILE} from "../constants/profileConstants";

const initialState: ProfileState = {
    user: {
        username: '',
        email: '',
        bio: '',
        image: '',
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
                user: action.user
            }
        case SET_PROFILE_ERROR:
            return {
                ...state,
                error: action.error
            }
        default: return state
    }
}