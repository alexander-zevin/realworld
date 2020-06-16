import {IInitializedSuccessAction} from "../types/appTypes";
import {INITIALIZED_SUCCESS} from "../constants/appConstants";

export const setInitializedSuccess = (initialized: boolean): IInitializedSuccessAction => ({
		type: INITIALIZED_SUCCESS,
		initialized: initialized
})