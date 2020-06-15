import withStyles from "@material-ui/core/styles/withStyles";
import {Button} from "@material-ui/core";
import styled from "styled-components";
import {Link} from "react-router-dom";
import CircularProgress from '@material-ui/core/CircularProgress';

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

export const StyledLink = styled(Link)`
    text-decoration: none;
`;

export const SignLink = styled(StyledLink)`
	&:hover {
		text-decoration: underline;
	}
`;

export const ProgressRoot = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;