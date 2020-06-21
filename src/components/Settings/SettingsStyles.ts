import styled from "styled-components";
import {TextField, Typography} from "@material-ui/core";

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
    variant: "h3",
    component: "h3"
}))`
   
`;