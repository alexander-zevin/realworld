import {SetBio, SetEmail, SetImage, SetSettingsState, SetUsername} from "./SettingsTypes";
import {SET_BIO, SET_EMAIL, SET_IMAGE, SET_SETTINGS_STATE, SET_USERNAME} from "./SettingsConstants";
import {ProfileState} from "../../store/types/profileTypes";

export const setImage = (image: string): SetImage => ({
    type: SET_IMAGE,
    image: image
})

export const setUsername = (username: string): SetUsername => ({
    type: SET_USERNAME,
    username: username
})

export const setSettingsState = (profileState: ProfileState): SetSettingsState => ({
    type: SET_SETTINGS_STATE,
    image: profileState.user.image,
    username: profileState.user.username,
    bio: profileState.user.bio,
    email: profileState.user.email
})

export const setBio = (bio: string): SetBio => ({
    type: SET_BIO,
    bio: bio
})

export const setEmail = (email: string): SetEmail => ({
    type: SET_EMAIL,
    email: email
})