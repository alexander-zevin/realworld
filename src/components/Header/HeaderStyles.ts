import styled from "styled-components";

export const HeaderRoot = styled.header`
	padding: 16px 0;
	display: flex;
	justify-content: space-between;
`;

export const Title = styled.span`
	font-size: 1.4em;
	font-weight: bold;
	color: #43a047;
`;

export const Navigation = styled.nav`
	
`;

export const NavBtn = styled.button`
	background-color: transparent;
	border: none;
	outline: none;
	font-size: 1em;
	color: #757575;
	&:hover {
		color: #212121;
	}
`;
