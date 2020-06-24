import styled from "styled-components";
import {Typography} from "@material-ui/core";
import {StyledButton} from "../common/styled/rest";
import red from '@material-ui/core/colors/red';

export const SettingsMain = styled.main`
	width: 30vw;
	margin-top: 16px;	
	flex-grow: 1;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const SettingsTitle = styled(Typography).attrs(props => ({
    variant: "h4",
    component: "h4"
}))`
   
`;

export const SettingsButton = styled(StyledButton).attrs(() => ({
    variant: 'contained',
    color: 'primary',
    size: 'large'
}))`
    margin: 16px 0;
    align-self: flex-end;
`;

export const LogoutButton = styled(StyledButton).attrs(() => ({
    variant: 'contained',
    size: 'large'
}))`
    margin-top: 16px;
    align-self: flex-start;
    background-color: ${red[500]};
    &:hover {
        background-color: ${red[800]};
    }
`;