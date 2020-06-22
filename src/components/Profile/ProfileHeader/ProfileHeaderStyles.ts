import styled from "styled-components";
import Button from "@material-ui/core/Button";
import {Typography} from "@material-ui/core";

export const ProfileHeaderRoot = styled.div`
	background-color: #e0e0e0;
	align-self: stretch;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	padding: 32px 20%;
`;

export const AvatarCircle = styled.div`
	background-color: #757575;
	width: 100px;
	height: 100px;
	border-radius: 50%;
	font-size: 32px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
`;

export const TitleName = styled.h2`

`;

export const EditButton = styled(Button).attrs(() => ({}))`
    border: 1px solid #616161;
    color: #616161;
    align-self: flex-end;
`;

export const Bio = styled(Typography).attrs(props => ({
		variant: "subtitle2",
		component: "span"
}))`
   
`;