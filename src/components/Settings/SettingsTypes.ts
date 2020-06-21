import {SET_BIO, SET_EMAIL, SET_IMAGE, SET_PASSWORD, SET_SETTINGS_STATE, SET_USERNAME} from "./SettingsConstants";
import {ProfileState} from "../../store/types/profileTypes";

export interface SettingsState {
    image: string
    username: string
    bio: string
    email: string
    password: string
}

export interface SetImage {
    type: typeof SET_IMAGE
    image: string
}

export interface SetUsername {
    type: typeof SET_USERNAME
    username: string
}

export interface SetSettingsState {
    type: typeof SET_SETTINGS_STATE
    profile: ProfileState
}

export interface SetBio {
    type: typeof SET_BIO
    bio: string
}

export interface SetEmail {
    type: typeof SET_EMAIL
    email: string
}

export interface SetPassword {
    type: typeof SET_PASSWORD
    password: string
}

export type SettingsActions = SetImage | SetUsername | SetSettingsState | SetBio | SetEmail | SetPassword