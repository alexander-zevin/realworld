import {IAppState, IInitializedSuccessAction} from "../types/appTypes";
import {INITIALIZED_SUCCESS} from "../constants/appConstants";

const initialState: IAppState = {
		initialized: false
};

export const appReducer = (state = initialState, action: IInitializedSuccessAction) => {
		if (action.type === INITIALIZED_SUCCESS)
				return {...state, initialized: action.initialized}
		else return state
}