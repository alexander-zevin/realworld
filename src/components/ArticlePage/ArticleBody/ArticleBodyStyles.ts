import styled from "styled-components";
import {Typography} from "@material-ui/core";

export const Body = styled(Typography).attrs(() => ({
		variant: "body1",
		component: "p"
}))`
		margin: 16px 0
`;

export const ArticleBodyRoot = styled.div`
		padding: 0 20%;
		box-sizing: border-box;
`;

export const TagsBox = styled.div`
	display: flex;
	flex-wrap: wrap;
	& > div {
		margin: 4px 4px 16px 0px;
	}	
`;
