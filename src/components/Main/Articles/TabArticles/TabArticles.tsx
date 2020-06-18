import React, {useEffect} from 'react'
import Tabs from '@material-ui/core/Tabs';
import {Tab} from "@material-ui/core";
import Divider from '@material-ui/core/Divider';
import {useDispatch, useSelector} from "react-redux";
import {getGlobalArticles, getYourArticles} from "../../../../store/actions/articlesActions";
import {RootState} from "../../../../store/store";
import {useHistory} from "react-router-dom";

const TabArticles = () => {

    const dispatch = useDispatch()

    const history = useHistory();

    const [value, setValue] = React.useState<number>(1)
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => setValue(newValue)

    const isAuth: boolean = useSelector((state: RootState) => state.auth.isAuth);

    const getGlobalFeed = () => dispatch(getGlobalArticles())

    const getYourFeed = () => {
        if (isAuth) {
            dispatch(getYourArticles())
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
                <Tab label="Global Feed"  onClick={getGlobalFeed}/>
                <Tab label="#" />
            </Tabs>
            <Divider/>
        </>
    )
}

export default TabArticles
