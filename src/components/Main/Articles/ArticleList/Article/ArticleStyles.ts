import styled from "styled-components";
import Favorite from '@material-ui/icons/Favorite';
import {ListItem, Typography} from "@material-ui/core";
import React from "react";

export const ListBasis = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ListBasisLeft = styled.div``;

export const ListBasisRight = styled.div`
    align-self: flex-end;
`;

export const FavoriteButton = styled.button`
    ${({theme}) => `
        outline: none;
        border: 1px solid ${theme.palette.primary.main};
        border-radius: 3px;
        background-color: transparent;
        display: flex;
        align-items: center;
        padding: 4px;
    `}
    
`;

export const FavoriteCount = styled.span`
    ${({theme}) => `
        margin-left: 4px;
        color: ${theme.palette.primary.main};
    `}
    
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
`;

export const ListTitle = styled(Typography).attrs(props => ({
    variant: "h5",
    component: "div"
}))`
   
`;

