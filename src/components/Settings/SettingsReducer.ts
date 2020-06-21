import {SettingsActions, SettingsState} from "./SettingsTypes";
import {SET_BIO, SET_EMAIL, SET_IMAGE, SET_SETTINGS_STATE, SET_USERNAME} from "./SettingsConstants";

export const initialState: SettingsState = {
    image: '',
    username: '',
    bio: '',
    email: '',
    password: '',
};

export const settingsReducer = (state: SettingsState, action: SettingsActions) => {
    switch (action.type) {
        case SET_IMAGE:
            return {...state, image: action.image}
        case SET_USERNAME:
            return {...state, username: action.username}
        case SET_SETTINGS_STATE:
            return {
                ...state,
                image: action.image,
                username: action.username,
                bio: action.bio,
                email: action.email
            }
        case SET_BIO:
            return {...state, bio: action.bio}
        case SET_EMAIL:
            return {...state, email: action.email}
        default: return state
    }
}