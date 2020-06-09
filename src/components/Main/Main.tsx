import React from 'react'
import {MainRoot} from "./MainStyles";
import Tabs from '@material-ui/core/Tabs';
import {Tab} from "@material-ui/core";
import Divider from '@material-ui/core/Divider';

const Main = () => {

    const [value, setValue] = React.useState(2);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <MainRoot>
            <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="disabled tabs example"
            >
                <Tab label="Your Feed"/>
                <Tab label="Global Feed"/>
            </Tabs>
            <Divider/>
        </MainRoot>
    )
}

export default Main
