import React from 'react'
import Tabs from '@material-ui/core/Tabs';
import {Tab} from "@material-ui/core";
import Divider from '@material-ui/core/Divider';
import {useDispatch} from "react-redux";
import {getArticlesThunkCreator} from "../../../../store/actions/articlesActions";

const TabArticles = () => {

    const dispatch = useDispatch()

    const [value, setValue] = React.useState(0)

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => setValue(newValue)

    const getGlobalFeed = () => dispatch(getArticlesThunkCreator())

    return (
        <>
            <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
            >
                <Tab label="Your Feed"/>
                <Tab label="Global Feed" onClick={getGlobalFeed} />
            </Tabs>
            <Divider/>
        </>
    )
}

export default TabArticles
