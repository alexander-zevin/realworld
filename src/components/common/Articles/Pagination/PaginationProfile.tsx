import React, {FC, useState} from 'react'
import MuiPagination from '@material-ui/lab/Pagination';
import {PaginationRoot} from "./PaginationStyles";
import {PaginationProps} from "./PaginationTypes";
import {useDispatch, useSelector} from "react-redux";
import {getMyArticles} from "../../../../store/actions/articlesActions";
import {RootState} from "../../../../store/store";
import {ProfileState} from "../../../../store/types/profileTypes";

const PaginationProfile: FC<PaginationProps> = ({articlesCount}) => {

    const dispatch = useDispatch()

    const profileState: ProfileState = useSelector((state: RootState) => state.profile);

    const pageCount = articlesCount ? Math.ceil(articlesCount / 2) : 0

    const limit = 2

    const [portionNumber, setPortionNumber] = useState(1);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPortionNumber(value)
        let offset = (value - 1) * limit
        dispatch(getMyArticles(profileState.user.username, offset, limit))
    };

    return (
        <PaginationRoot>
            <MuiPagination count={pageCount} onChange={handleChange}/>
        </PaginationRoot>
    )
}

export default PaginationProfile
