import {ArticlesActionType, IArticlesState} from "../types/articlesType";
import {SET_ARTICLES} from "../constants/articlesContants";

const initialState: IArticlesState = {
    articles: [],
    articlesCount: null
};

export const articlesReducer = (state = initialState, action: ArticlesActionType): IArticlesState => {
    switch (action.type) {
        case SET_ARTICLES:
            return action.articlesState
    }
    return state
}

