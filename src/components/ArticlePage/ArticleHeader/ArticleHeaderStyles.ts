import styled from "styled-components";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";

export const ArticleHeaderRoot = styled.main`
	padding: 32px 20%;
	background-color: #424242;
	color: white;
	width: 100vw;
	box-sizing: border-box;
`;

export const Title = styled.h1`
    margin-top: 0;
`;

export const AuthorBlock = styled.div`
	position: relative;
	left: -16px;
	width: 400px;
`;

export const ListItemTextStyled = styled(ListItemText)`
    & .MuiTypography-colorTextSecondary {
        color: #bdbdbd;
    }	
`;

export const FollowButton = styled(Button)`
    border: 1px solid #bdbdbd;
    color: #bdbdbd;
`;