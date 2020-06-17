import CircularProgress from "@material-ui/core/CircularProgress";
import React from "react";
import {ProgressRoot} from "./styled/rest";

const Progress = () => {
    return (
        <ProgressRoot>
            <CircularProgress/>
        </ProgressRoot>
    )
}

export default Progress
