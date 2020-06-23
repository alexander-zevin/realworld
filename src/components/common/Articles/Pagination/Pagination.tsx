import React, {FC, useState} from 'react'
import MuiPagination from '@material-ui/lab/Pagination';
import {PaginationRoot} from "./PaginationStyles";
import {PaginationProps} from "./PaginationTypes";
import {useDispatch, useSelector} from "react-redux";
import {getGlobalArticles, getMyArticles} from "../../../../store/actions/articlesActions";
import { useRouteMatch } from "react-router-dom";
import {ProfileState} from "../../../../store/types/profileTypes";
import {RootState} from "../../../../store/store";

const Pagination: FC<PaginationProps> = ({articlesCount}) => {

    const dispatch = useDispatch()

    const profileState: ProfileState = useSelector((state: RootState) => state.profile);

    let {limit, offset} = useSelector((state: RootState) => state.articles);

    const match = useRouteMatch("/");

    const pageCount = articlesCount ? Math.ceil(articlesCount / limit) : 0

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        offset = (value - 1) * limit
        if (match?.isExact) {
            dispatch(getGlobalArticles(offset, limit))
        } else {
            dispatch(getMyArticles(profileState.user.username, offset, limit))
        }
    };

    return (
        <PaginationRoot>
            <MuiPagination count={pageCount} onChange={handleChange}/>
        </PaginationRoot>
    )
}

export default Pagination
