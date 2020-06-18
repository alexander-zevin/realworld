import styled from "styled-components";
import {TextField} from "@material-ui/core";

export const EditorRoot = styled.main`
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
`;

export const EditorForm = styled.form`
	width: 600px;
`;

export const EditorTextField = styled(TextField).attrs(props => ({
    label: props.label,
    fullWidth: true,
    size: 'medium',
    multiline: props.multiline || false,
    variant: "outlined",
    margin: 'normal'
}))`
`;

export const ButtonContainer = styled.div`
	margin-top: 16px;
	float: right;
`;