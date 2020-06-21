import styled from "styled-components";
import {TextField, Typography} from "@material-ui/core";
import {StyledButton} from "../common/styled/rest";
import React from "react";

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
    margin-top: 16px;
    align-self: flex-end;
`;