import styled from "styled-components";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import {Typography} from "@material-ui/core";

export const ArticleHeaderRoot = styled.main`
	padding: 32px 20%;
	background-color: #424242;
	color: white;
	width: 100vw;
	box-sizing: border-box;
`;

export const Title = styled(Typography).attrs(() => ({
		variant: "h2",
		component: "h1"
}))`
`;

export const AuthorBlock = styled.div`
	width: 500px;
`;

export const ListItemTextStyled = styled(ListItemText)`
    & .MuiTypography-colorTextSecondary {
        color: #bdbdbd;
    }	
    
`;

export const FollowButton = styled(Button).attrs(() => ({

}))`
    border: 1px solid #bdbdbd;
    color: #bdbdbd;
`;

export const FavoriteButton = styled(Button).attrs(() => ({

}))`
    ${({theme}) => `
        border: 1px solid ${theme.palette.primary.main};
        color: ${theme.palette.primary.main};
        background-color: transparent;
        margin-left: 8px;
    `}
    
`;