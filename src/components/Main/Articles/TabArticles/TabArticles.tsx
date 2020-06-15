import React, {useEffect} from 'react'
import Tabs from '@material-ui/core/Tabs';
import {Tab} from "@material-ui/core";
import Divider from '@material-ui/core/Divider';
import {useDispatch, useSelector} from "react-redux";
import {getGlobalArticlesThunkCreator, getYourArticlesThunkCreator} from "../../../../store/actions/articlesActions";
import {RootStateType} from "../../../../store/store";
import {IProfileState} from "../../../../store/types/profileTypes";
import {useHistory} from "react-router-dom";

const TabArticles = () => {

    const dispatch = useDispatch()

    const history = useHistory();

    const [value, setValue] = React.useState(1)
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => setValue(newValue)

    const prifileState: IProfileState = useSelector((state: RootStateType) => state.profile);
    const isAuth: boolean = useSelector((state: RootStateType) => state.auth.isAuth);

    const getGlobalFeed = () => dispatch(getGlobalArticlesThunkCreator())

    useEffect(() => {
        getGlobalFeed()
    }, [])

    const getYourFeed = () => {
        if (isAuth) {
            dispatch(getYourArticlesThunkCreator(prifileState.user.username))
        } else {
            history.push('/signin')
        }
    }

    return (
        <>
            <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
            >
                <Tab label="Your Feed" onClick={getYourFeed} />
                <Tab label="Global Feed" onClick={getGlobalFeed} />
            </Tabs>
            <Divider/>
        </>
    )
}

export default TabArticles
