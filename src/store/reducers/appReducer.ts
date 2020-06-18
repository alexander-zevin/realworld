import {AppState, InitializedSuccess} from "../types/appTypes";
import {INITIALIZED_SUCCESS} from "../constants/appConstants";

const initialState: AppState = {
    initialized: false
};

export const appReducer = (state = initialState, action: InitializedSuccess) => {
    if (action.type === INITIALIZED_SUCCESS)
        return {...state, initialized: action.initialized}
    else return state
}