import withStyles from "@material-ui/core/styles/withStyles";
import {Button} from "@material-ui/core";

export const StyledButton = withStyles({
    label: {
        fontWeight: 'normal',
        color: "white"
    },
})(Button);