import {SET_PROFILE} from "../constants/profileConstants";
import {SetProfile, User} from "../types/profileTypes";
import {SetPagination} from "../types/articlesType";
import {SET_PAGINATION} from "../constants/articlesContants";

export const setProfile = (user: User): SetProfile => ({
    type: SET_PROFILE,
    user: user
})
