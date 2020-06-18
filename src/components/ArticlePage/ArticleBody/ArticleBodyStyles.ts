import styled from "styled-components";
import {Typography} from "@material-ui/core";

export const Body = styled(Typography).attrs(() => ({
		variant: "body1",
		component: "p"
}))`
		margin: 32px 0
`;

export const ArticleBodyRoot = styled.div`
		padding: 0 20%;
`;
