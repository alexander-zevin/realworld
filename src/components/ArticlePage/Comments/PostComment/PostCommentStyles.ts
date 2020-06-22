import styled from "styled-components";
import {MultilineTextField, StyledButton} from "../../../common/styled/rest";

export const PostCommentRoot = styled.section`
	width: 100%;
`;

export const PostInput = styled(MultilineTextField).attrs(() => ({

}))`

`;

export const CommentFooter = styled.div`

`;

export const PostCommentButton = styled(StyledButton).attrs(() => ({
		variant: 'contained',
		color: 'primary',
		// size: 'large'
}))`
    margin-top: 8px;
    float: right;
`;