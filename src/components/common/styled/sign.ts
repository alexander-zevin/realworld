import styled from "styled-components";
import {green} from "@material-ui/core/colors";
import {TextField} from "@material-ui/core";
import {Alert} from "@material-ui/lab";
import {StyledButton} from "./rest";

export const SignRoot = styled.div`
    flex-grow: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const SignForm = styled.form.attrs( () => ({
    novalidate: true,
    autocomplete: 'on'
}))`
    width: 350px;
    background-color: white;
    padding: 8px;
    text-align: center;
`;

export const SignTitle = styled.span`
    font-size: 1.5em;
    display: block;
    margin: 8px;
`;

export const SignDescription = styled.a`
	color: ${green[500]};
	cursor: pointer;
	&: hover {
	    text-decoration-line: underline;
	}
`;

export const SignInput = styled(TextField).attrs( () => ({
    fullWidth: true
}))`
    margin-bottom: 16px;
`;

export const Error = styled(Alert).attrs(() => ({
    severity: "error"
}))``;

export const SignButton = styled(StyledButton).attrs(() => ({
    variant: 'contained',
    color: 'primary',
    size: 'large'
}))`
    margin-top: 16px;
`;

