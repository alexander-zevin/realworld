import {IAuthState, AuthStateType} from "../types/authTypes";
import {SET_AUTH, SET_AUTH_ERROR} from "../constants/authConstants";

const initialState: IAuthState = {
		isAuth: false,
		error: {
				name: null,
				message: null
		}
};

export const authReducer = (state = initialState, action: AuthStateType): IAuthState => {
		switch (action.type) {
				case SET_AUTH:
						return {...state, isAuth: action.isAuth }
				case SET_AUTH_ERROR:
						return {...state, error: action.error}
				default: return state

		}
}