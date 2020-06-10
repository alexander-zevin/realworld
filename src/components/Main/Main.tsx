import React from 'react'
import {MainRoot} from "./MainStyles";
import Tags from "./Tags/Tags";
import Feeds from "./Feeds/Feeds";

const Main = () => {
    return (
        <MainRoot>
            <Feeds/>
            <Tags/>
        </MainRoot>
    )
}

export default Main
