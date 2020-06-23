import CircularProgress from "@material-ui/core/CircularProgress";
import React, {FC} from "react";
import {ProgressRoot} from "./ProgressStyles";

const Progress: FC<any> = props => {
    return (
        <ProgressRoot>
            <CircularProgress {...props}/>
        </ProgressRoot>
    )
}

export default Progress
