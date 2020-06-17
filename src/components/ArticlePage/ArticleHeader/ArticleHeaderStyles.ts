import styled from "styled-components";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";

export const ArticleHeaderRoot = styled.main`
	padding: 32px 20%;
	background-color: #424242;
	color: white;
	width: 100vw;
	box-sizing: border-box;
`;

export const Title = styled.h1`
		margin-top: 0;
`;

export const AuthorBlock = styled.div`
	position: relative;
	left: -16px
`;

export const ListItemTextStyled = styled(ListItemText)`
		& .MuiTypography-colorTextSecondary {
			color: white;
		}	
`;

export const FollowButton = styled(Button)`
	background-color: white;
  color: #fff;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 7px 14px;
  &:hover {
    background-color: #5469d4;
  }
`;