import {INITIALIZED_SUCCESS} from "../constants/appConstants";

export interface InitializedSuccess {
    type: typeof INITIALIZED_SUCCESS
    initialized: boolean
}

export interface AppState {
    initialized: boolean
}