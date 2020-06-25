import styled from "styled-components";
import {Typography} from "@material-ui/core";

export const EditorRoot = styled.main`
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
`;

export const EditorForm = styled.form`
	width: 600px;
`;

export const ButtonContainer = styled.div`
	margin-top: 16px;
	float: right;
`;

export const EditorTitle = styled(Typography).attrs(props => ({
    variant: "h4",
    component: "h4"
}))`
   align-self: center;
`;