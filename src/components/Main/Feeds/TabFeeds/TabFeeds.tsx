import React from 'react'
import Tabs from '@material-ui/core/Tabs';
import {Tab} from "@material-ui/core";
import Divider from '@material-ui/core/Divider';

const TabFeeds = () => {

    const [value, setValue] = React.useState(2)

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => setValue(newValue)

    return (
        <>
            <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
            >
                <Tab label="Your Feed"/>
                <Tab label="Global Feed"/>
            </Tabs>
            <Divider/>
        </>
    )
}

export default TabFeeds
