import withStyles from "@material-ui/core/styles/withStyles";
import {Button} from "@material-ui/core";
import styled from "styled-components";

export const StyledButton = withStyles({
    label: {
        fontWeight: 'normal',
        color: "white"
    },
})(Button);

export const TagsBox = styled.div`
	display: flex;
	flex-wrap: wrap;
	& > div {
		margin: 4px;
	}	
`;