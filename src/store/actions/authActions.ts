import {SET_AUTH, SET_AUTH_ERROR} from "../constants/authConstants";
import {ISetAuthAction, ISetAuthErrorAction} from "../types/authTypes";

export const setAuthActionCreator = (isAuth: boolean): ISetAuthAction => ({
		type: SET_AUTH,
		isAuth: isAuth
})

export const setAuthErrorActionCreator = (error: string | null): ISetAuthErrorAction => ({
		type: SET_AUTH_ERROR,
		error: error
})