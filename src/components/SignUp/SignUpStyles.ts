import styled from "styled-components";
import {green} from "@material-ui/core/colors";

export const LoginRoot = styled.main`
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const LoginTitle = styled.span`
    font-size: 1.5em;
    display: block;
		margin: 8px;
`;

export const LoginForm = styled.form.attrs( () => ({
		novalidate: true,
		autocomplete: 'on'
}))`
    width: 350px;
    background-color: white;
    padding: 8px;
    text-align: center;
`;

export const LoginDescription = styled.a`
	color: ${green[500]}
`;

export const MarginContainer = styled.div`
	margin: 16px
`;
