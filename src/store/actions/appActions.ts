import {InitializedSuccess} from "../types/appTypes";
import {INITIALIZED_SUCCESS} from "../constants/appConstants";

export const initializedSuccess = (initialized: boolean): InitializedSuccess => ({
    type: INITIALIZED_SUCCESS,
    initialized: initialized
})