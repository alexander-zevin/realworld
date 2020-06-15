import {SET_AUTH, SET_AUTH_ERROR} from "../constants/authConstants";

export interface IAuthState {
		isAuth: boolean
		error: {
				name: string | null
				message: string | null
		}
}

export interface ISetAuthAction {
		type: typeof SET_AUTH
		isAuth: boolean
}

export interface ISetAuthErrorAction {
		type: typeof SET_AUTH_ERROR
		error: {
				name: string | null
				message: string | null
		}
}

export type AuthStateType = ISetAuthAction | ISetAuthErrorAction