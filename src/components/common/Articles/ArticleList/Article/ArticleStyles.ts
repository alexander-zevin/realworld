import styled from "styled-components";
import Favorite from '@material-ui/icons/Favorite';
import {Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";

export const ListBasis = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ListBasisLeft = styled.div``;

export const ListBasisRight = styled.div`
    align-self: flex-end;
`;

export const FavoriteIcon = styled(Favorite).attrs(props => ({
    color: 'primary',
    style: {
        fontSize: 14
    }
}))`
    
`;

export const ArticleRoot = styled.div`
    margin-bottom: 16px;
`;

export const ListDescription = styled(Typography).attrs(props => ({
    variant: "subtitle2",
    component: "div"
}))`
   
`;

export const ReadMore = styled(Typography).attrs(props => ({
    variant: "caption",
    component: "div"
}))`
    font-size: 0.8em;
    cursor: pointer;  
    margin-top: 16px;  
    &:hover {
        text-decoration-line: underline;
    }
`;

export const ListTitle = styled(Typography).attrs(props => ({
    variant: "h5",
    component: "div"
}))`
   
`;

export const FavoriteButton = styled(Button).attrs(() => ({

}))`
    ${({theme}) => `
        border: 1px solid ${theme.palette.primary.main};
        color: ${theme.palette.primary.main};
        background-color: transparent;
        padding: 0 8px;
        min-width: 0px;
    `}
`;

