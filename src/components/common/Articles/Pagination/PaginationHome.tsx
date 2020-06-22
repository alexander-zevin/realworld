import React, {FC, useState} from 'react'
import MuiPagination from '@material-ui/lab/Pagination';
import {PaginationRoot} from "./PaginationStyles";
import {PaginationProps} from "./PaginationTypes";
import {useDispatch} from "react-redux";
import {getGlobalArticles} from "../../../../store/actions/articlesActions";

const Pagination: FC<PaginationProps> = ({articlesCount}) => {

    const dispatch = useDispatch()

    const pageCount = articlesCount ? Math.ceil(articlesCount / 2) : 0

    const limit = 2

    const [portionNumber, setPortionNumber] = useState(1);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPortionNumber(value);
        let offset = (value - 1) * limit
        dispatch(getGlobalArticles(offset, limit))
    };

    return (
        <PaginationRoot>
            <MuiPagination count={pageCount} onChange={handleChange}/>
        </PaginationRoot>
    )
}

export default Pagination
