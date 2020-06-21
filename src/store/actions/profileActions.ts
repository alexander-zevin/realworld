import {SET_PROFILE} from "../constants/profileConstants";
import {SetProfile, User} from "../types/profileTypes";

export const setProfile = (user: User): SetProfile => ({
    type: SET_PROFILE,
    user: user
})