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
`;

export const LoginForm = styled.form.attrs( () => ({
		novalidate: true,
		autocomplete: 'on'
}))`
    height: 300px;
    width: 300px;
    background-color: white;
    padding: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const LoginDescription = styled.a`
	color: ${green[500]}
`;

