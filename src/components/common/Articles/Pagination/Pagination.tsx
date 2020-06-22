import React, {FC, useState} from 'react'
import MuiPagination from '@material-ui/lab/Pagination';
import {PaginationRoot} from "./PaginationStyles";
import {PaginationProps} from "./PaginationTypes";
import {useDispatch, useSelector} from "react-redux";
import {getGlobalArticles, setPagination} from "../../../../store/actions/articlesActions";
import {ArticlesState} from "../../../../store/types/articlesType";
import {RootState} from "../../../../store/store";

const Pagination: FC<PaginationProps> = ({articlesCount}) => {

    const dispatch = useDispatch()

    // const articlesState: ArticlesState = useSelector((state: RootState) => state.articles);

    const pageCount = articlesCount ? Math.ceil(articlesCount / 2) : 0

    const limit = 2

    const [portionNumber, setPortionNumber] = useState(1);

    // let offset = (portionNumber - 1) * limit

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        // setPortionNumber(value);
        let offset = (value - 1) * limit
        // dispatch(setPagination(offset - 1, limit))
        dispatch(getGlobalArticles(offset, limit))
    };

    return (
        <PaginationRoot>
            <MuiPagination count={pageCount} onChange={handleChange}/>
        </PaginationRoot>
    )
}

export default Pagination
