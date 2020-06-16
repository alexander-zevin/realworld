import {INITIALIZED_SUCCESS} from "../constants/appConstants";

export interface IInitializedSuccessAction {
		type: typeof INITIALIZED_SUCCESS
		initialized: boolean
}

export interface IAppState {
		initialized: boolean
}