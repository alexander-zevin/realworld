import styled from "styled-components";
import grey from "@material-ui/core/colors/grey";
import {Avatar} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

export const CommentRoot = styled.section`
	border: 1px solid ${grey[400]};
	padding: 16px 16px 8px 16px;
	border-radius: 4px;
	margin-top: 16px;
`;

export const CommentBody = styled(Typography).attrs(() => ({
		variant: 'body1',
		component: 'div'
}))`
	margin-bottom: 16px;
`;

export const AuthorBlock = styled.div`
	margin-top: 8px;
	display: flex;
`;

export const CommentAvatar = styled(Avatar)`
	width: 24px;
	height: 24px;
	align-self: center;
`;

export const Author = styled(Typography).attrs(() => ({
		variant: 'body2',
		component: 'span'
}))`
	${({theme}) => `
			color: ${theme.palette.primary.main};
			margin-left: 8px;
			&:hover {
				text-decoration: underline;
			};
			align-self: center;
	`}
`;

export const CreatedAt = styled(Typography).attrs(() => ({
		variant: 'subtitle2',
		component: 'span'
}))`
	${({theme}) => `
			flex-grow: 1;
			margin-left: 8px;
			align-self: center;
	`}
`;

