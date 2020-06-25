import React, {FC} from 'react'
import MuiPagination from '@material-ui/lab/Pagination';
import {PaginationRoot} from "./PaginationStyles";
import {PaginationProps} from "./PaginationTypes";
import {useDispatch} from "react-redux";
import {
    getFavoritedArticles,
    getFeedArticles,
    getGlobalArticles,
    getGlobalArticlesByTag,
    getMyArticles
} from "../../../../store/actions/articlesActions";
import { useRouteMatch } from "react-router-dom";

const Pagination: FC<PaginationProps> = ({articlesCount, activeTab, profileState,
                                             tagName, limit, offset}) => {

    const dispatch = useDispatch()

    const match = useRouteMatch("/");

    const pageCount = articlesCount ? Math.ceil(articlesCount / limit) : 0

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        offset = (value - 1) * limit
        if (match?.isExact) {
            switch(activeTab) {
                case 0: dispatch(getFeedArticles(offset, limit)); break
                case 1: dispatch(getGlobalArticles(offset, limit)); break
                case 2: dispatch(getGlobalArticlesByTag(tagName, offset, limit))
            }
        } else {
            activeTab === 0
                ? dispatch(getMyArticles(profileState.user.username, offset, limit))
                : dispatch(getFavoritedArticles(profileState.user.username, offset, limit))
        }
    };

    return (
        <PaginationRoot>
            <MuiPagination count={pageCount} onChange={handleChange}/>
        </PaginationRoot>
    )
}

export default Pagination
