import React, {useState} from 'react'
import {MainRoot} from "./MainStyles";
import Tags from "./Tags/Tags";
import Articles from "./Articles/Articles";

const Main = () => {
    return (
        <MainRoot>
            <Articles/>
            <Tags/>
        </MainRoot>
    )
}

export default Main
