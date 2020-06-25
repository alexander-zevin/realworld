import styled from "styled-components";
import {grey} from "@material-ui/core/colors";

export const TagsTitle = styled.div`
	margin: 8px;
`;

export const TagsBox = styled.div`
	display: flex;
	flex-wrap: wrap;
	& > div {
		margin: 4px 4px 16px 0px;
	}	
`;

export const TagsRoot = styled.aside`
	background-color: ${grey[100]};
	padding: 4px;
	width: 300px;
	align-self: flex-start;
	margin-left: 16px;
`;