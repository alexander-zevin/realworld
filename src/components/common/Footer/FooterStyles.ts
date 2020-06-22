import styled from "styled-components";
import grey from '@material-ui/core/colors/grey';
import {Typography} from "@material-ui/core";

export const FooterRoot = styled.footer`
    ${({theme}) => `
        background-color: ${theme.palette.secondary.main};
        width: 100%;
        padding: 8px;
        box-sizing: border-box;
        color: white;
        padding: 8px 20%;
    `}
`;

export const FooterTitle = styled.span`
    ${({theme}) => `
        font-size: 1.1em;
        font-weight: bold;
        color: ${theme.palette.primary.main};
    `}
`;

export const FooterBody = styled(Typography).attrs(props => ({
    variant: "subtitle2",
    component: "span"
}))`
   margin-left: 16px;
`;

